import React, {useEffect, useState} from 'react';
import { companyList } from '../../../services/companyService';
ComponentsList.propTypes = {};

function ComponentsList(props) {

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
    useEffect(() => {
        // async () => {
        //     const { data } = await companyList();
        // }

        setCompanyList(list)
    }, [])

    return (
        <div>
            <h3 className='text-center'>Company List</h3>
            <table className='w-100'>
                <thead>
                <tr className='border-top border-bottom border-primary '>
                    <td className='w-25 px-1'>name</td>
                    <td className='w-50 px-1'>domain</td>
                    <td className='w-25 px-1'>admin_account</td>
                </tr>
                </thead>
                <tbody>
                {
                    companyList && companyList.map((item, index) => {
                        return (
                            <>
                                <tr key={item.id} className='border-bottom border-primary'>
                                    <td className='px-1'>{item.name}</td>
                                    <td className='px-1'><a href={item.domain}>{item.domain}</a></td>
                                    <td className='px-1'>{item.admin_account}</td>
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