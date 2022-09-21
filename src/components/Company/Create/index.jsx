import React, {useState} from 'react';

ComponentsCreate.propTypes = {};

function ComponentsCreate(props) {
    const [company, setCompany] = useState({});

    const onInputChange = (event, field) => {
        let value = event.target.value
        let companyInfo = {
            name: '',
            domain: '',
            admin_account: ''
        }
        if(field === 'name'){
            companyInfo.name = value
        }
        if(field === 'domain'){
            companyInfo.domain = value
        }
        if(field === 'admin_account'){
            companyInfo.admin_account = value
        }
        setCompany(companyInfo)
    }

    const handleCreateCompany = () => {
        const form_data = new FormData();

        form_data.append('name',company.name );
        form_data.append('domain', company.domain );
        form_data.append('admin_account', company.admin_account );
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

                <div className="form-group create-action button-action mt-3 m-auto" onClick={handleCreateCompany}>
                    Create
                </div>
            </div>
        </div>
    );
}

export default ComponentsCreate;