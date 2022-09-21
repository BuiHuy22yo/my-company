import React from 'react';

import Header from "../../components/Header";
import ComponentsCreate from "../../components/Company/Create/index";


CompanyCreate.propTypes = {};

function CompanyCreate(props) {
    return (
        <div className="company-detail-page">
            <Header/>
            <div className="container mt-4">
                <main className="site-main">
                    <div className="site-content">
                        <ComponentsCreate/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CompanyCreate;