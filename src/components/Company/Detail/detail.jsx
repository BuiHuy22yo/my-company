import React, {useEffect, useState} from 'react';
import {getCompanyDetailAPi, handleCompanyUpdate} from "../../../services/companyService";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

ComponentsDetail.propTypes = {};

function ComponentsDetail(props) {
    const [company, setCompany] = useState({});
    const navigate = useNavigate();

    const params = useParams();
    useEffect(() => {
        getCompanyDetail();
    }, [])

    const getCompanyDetail = async () => {
        try {
            let {data} = await getCompanyDetailAPi(params.id);
            console.log(data);
            setCompany(data)

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

    const onInputChange = (event, field) => {
        let value = event.target.value
        if(field === 'name'){
            // companyInfo.name = value
            setCompany(company.name =value )
        }
        if(field === 'domain'){
            // companyInfo.domain = value
            setCompany(company.domain =value )
        }
        if(field === 'admin_account'){
            // companyInfo.admin_account = value
            setCompany(company.admin_account =value )
        }
        // setCompany(companyInfo)
    }

    const handleUpdateCompany = (id) => {
        const form_data = new FormData();

        form_data.append('name',company.name );
        form_data.append('domain', company.domain );
        form_data.append('admin_account', company.admin_account );
        handleCompanyUpdate(id);
    }

    const handleListCompany = () => {
        navigate('/company/list', {replace: true});
    }

    return (
        <div>

            <div className="form_create">
                <h2 className="title">Update Company</h2>
                <div className="form-group icon-true pb-2">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        value={company.name}
                        onChange={(event) => onInputChange(event, 'name')}
                    />
                </div>
                <div className="form-group icon-true pb-2">
                    <label htmlFor="domain">Domain</label>
                    <input
                        id="domain"
                        name="domain"
                        type="text"
                        className="form-control"
                        value={company.domain}
                        onChange={(event) => onInputChange(event, 'domain')}
                    />
                </div>
                <div className="form-group icon-true pb-2">
                    <label htmlFor="admin_account">Admin Account</label>
                    <input
                        id="admin_account"
                        name="admin_account"
                        type="text"
                        className="form-control"
                        value={company.admin_account}
                        onChange={(event) => onInputChange(event, 'admin_account')}
                    />
                </div>
                <div className="form-group create-action button-action mt-3 m-auto" onClick={handleUpdateCompany}>
                    Update
                </div>
                <div className="form-group create-action button-action mt-3 m-auto" onClick={handleListCompany}>
                    Cancel
                </div>
            </div>
        </div>
    );
}

export default ComponentsDetail;