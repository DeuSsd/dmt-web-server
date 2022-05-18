import React from 'react';
// import Header from './Header/Header';
// import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MainPage from './MainPage/MainPage';
import AuthorizationPageContainer from './AuthorizationPage/AuthorizationPageContainer';



//  // {/* <Header /> */}
//     {/* {console.log(AuthService.login("user","@Qwerty1234"))} */}


function App(props) {

  return (
    <BrowserRouter>
      <div className={style.app}>
        <Routes>
          {/* <Route exect path='/main' element={<MainPage initialState={props.store.authState} />} /> */}
          <Route path='/' element={<AuthorizationPageContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
