import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getCompanyListAPi, handleCompanyDeleteApi} from '../../../services/companyService';

ComponentsList.propTypes = {};

function ComponentsList(props) {
    const navigate = useNavigate();

    const [companyList, setCompanyList] = useState([]);
    const list = [
        {
            id: 1,
            name: 'codluck',
            domain: 'https://codluck.com',
            admin_account: 'admin',
        },
        {
            id: 2,
            name: 'codluck',
            domain: 'https://codluck.com',
            admin_account: 'admin',
        },
        {
            id: 3,
            name: 'codluck',
            domain: 'https://codluck.com',
            admin_account: 'admin',
        }
    ]
    // useEffect(() => {
    //     setCompanyList(list)
    // })
    useEffect(() => {
        getCompanyList();
    }, [])

    const getCompanyList = async () => {
        try {
            let {data} = await getCompanyListAPi();
            console.log(data);
            setCompanyList(data)

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    let errMessage = e.response.data.message
                    console.log(errMessage)
                }
            }
            console.log('error message', e.response);
        }
    }

    const handleCreate = () => {
        navigate('/company/create', {replace: true});
    }
    const handleEdit = (event, id) => {
        navigate(`/company/edit/${id}`, {replace: true});
    }
    const handleDelete = (event, id) => {
        console.log('delete',id)

        handleCompanyDeleteApi(id);
        getCompanyList();
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-content-center mb-3'>
                <h3 className='mb-0'>Company List</h3>
                <div className="create button-action" onClick={() => handleCreate()}>Create</div>
            </div>
            <table className='w-100'>
                <thead>
                <tr className='border-top border-bottom border-primary text-center'>
                    <td className='w-25 px-1 py-2 '>name</td>
                    <td className='w-50 px-1 py-2 '>domain</td>
                    <td className='w-25 px-1 py-2 '>admin_account</td>
                    <td className='w-25 px-1 py-2 '>action</td>
                </tr>
                </thead>
                <tbody>
                {
                    companyList && companyList.map((item, index) => {
                        return (
                            <>
                                <tr key={item.id} className='border-bottom border-primary text-center'>
                                    <td className='px-1 py-2'>{item.name}</td>
                                    <td className='px-1 py-2'><a href={item.domain}>{item.domain}</a></td>
                                    <td className='px-1 py-2'>{item.admin_account}</td>
                                    <td className='px-1 py-2 d-flex'>
                                        <div className="create button-action mx-2"
                                             onClick={(event) => handleEdit(event, item.id)}>Edit
                                        </div>
                                        <div className="create button-action mx-2"
                                             onClick={(event) => handleDelete(event, item.id)}>Delete
                                        </div>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ComponentsList;