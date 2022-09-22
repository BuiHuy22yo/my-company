import React, {useState} from 'react';
import {handleCompanyCreate} from "../../../services/companyService";
import {useNavigate} from "react-router-dom";

ComponentsCreate.propTypes = {};

function ComponentsCreate(props) {
    const [company, setCompany] = useState({name: '',domain: '', admin_account: ''});
    const navigate = useNavigate();
    const onInputChange = (event, field) => {
        let value = event.target.value
        if(field === 'name'){
            setCompany({...company, name : value} )
        }
        if(field === 'domain'){
            setCompany({...company, domain : value} )
        }
        if(field === 'admin_account'){
            setCompany({...company,admin_account : value} )
        }
    }

    const handleCreateCompany = () => {
        const form_data = new FormData();

        form_data.append('name',company.name );
        form_data.append('domain', company.domain );
        form_data.append('admin_account', company.admin_account );
        console.log('company',company);
        handleCompanyCreate(form_data);
    }
    const handleListCompany = () => {
        navigate('/company/list', {replace: true});
    }

    return (
        <div>

            <div className="form_create">
                <h2 className="title">Create Company</h2>
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
                <div className='d-flex justify-content-center'>
                    <div className="form-group create-action button-action mt-3 mx-2" onClick={handleCreateCompany}>
                        Create
                    </div>
                    <div className="form-group create-action button-action mt-3 mx-2" onClick={handleListCompany}>
                        Cancel
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ComponentsCreate;