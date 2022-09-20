import React from 'react';

import Header from "../../components/Header";
import ComponentsList from "../../components/Company/List/list";


CompanyList.propTypes = {};

function CompanyList(props) {
    return (
        <div className="company-list-page">
            <Header/>
            <div className="container mt-4">
                <main className="site-main">
                    <div className="site-content">
                        <ComponentsList/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CompanyList;