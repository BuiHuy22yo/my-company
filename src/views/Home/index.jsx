import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header";
import ComponentsHome from "../../components/Home";

Home.propTypes = {};

function Home(props) {
    return (
        <div className="home-page">
            <Header/>
            <main className="site-main">
                <div className="site-content">
                    <ComponentsHome name="huybv"/>
                    {/*Đây là Home*/}
                </div>
            </main>
        </div>
    );
}

export default Home;