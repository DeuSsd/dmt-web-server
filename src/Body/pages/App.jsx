import React from 'react';
// import Header from './Header/Header';
// import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import CreateOrderPageContainer from './createOrderPage/CreateOrderPageContainer';


import AuthorizationPageContainer from './AuthorizationPage/AuthorizationPageContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Routes>
          <Route path='/apiselector/*' element={<CreateOrderPageContainer pathnameLocation='/apiselector'/>} />
          <Route path='/' element={<AuthorizationPageContainer pathnameLocation='/apiselector'/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


