import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../../components/Header";
import FromLogin from "../../../components/Auth/Login";
Login.propTypes = {};

function Login(props) {
    return (
        <div className="login-page">
            <Header/>
            <main className="site-main">
                <div className="site-content">
                    <FromLogin/>
                </div>
            </main>
        </div>
    );
}

export default Login;