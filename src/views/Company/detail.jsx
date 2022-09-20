import React from 'react';

import Header from "../../components/Header";
import ComponentsDetail from "../../components/Company/Detail/detail";


CompanyDetail.propTypes = {};

function CompanyDetail(props) {
    return (
        <div className="company-detail-page">
            <Header/>
            <div className="container mt-4">
                <main className="site-main">
                    <div className="site-content">
                        <ComponentsDetail/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CompanyDetail;