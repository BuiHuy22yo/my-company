import './App.css';
import React, {Suspense, useEffect} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Auth/Login';
import NotFound from "./components/NotFound";
import CompanyList from "./views/Company";
import CompanyDetail from "./views/Company/detail";

function App() {
    // const isLoggedIn = false;
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate('/');
    //     } else {
    //         navigate('/login');
    //     }
    // }, [isLoggedIn, navigate]);

  return (
    <div className="App">
    {/*  <Suspense fallback={<div>Loading...</div>}>*/}
    {/*    */}
    {/*</Suspense>*/}
        <Routes>
            <Route path='/' exact element={(<Home />)} />
            <Route path='/company/list' exact element={(<CompanyList />)} />
            <Route path='/company/detail/:id' element={(<CompanyDetail />)} />
            {/*<Route path='/login' element={(<Login/>)} />*/}
            <Route element={NotFound} />
        </Routes>
    </div>
  );
}

export default App;
