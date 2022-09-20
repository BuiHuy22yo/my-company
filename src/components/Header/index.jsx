import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from "react-router-dom";

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="App-header px-4">
            <div className="header__inner d-flex justify-content-between align-items-center">
                <div className="header__logo T24B_32 text-uppercase">
                    <NavLink className="text-decoration-none" to="/">My Company System</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;