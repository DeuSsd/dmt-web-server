import React from 'react';
// import Authorization from './Body/Aurhorization/Authorization';
// import Header from './Header/Header';
// import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Authorization from './AuthorizationPage/AuthorizationPage';
import MainPage from './MainPage/MainPage';
// import AuthService from '../../services/auth.service';


//  // {/* <Header /> */}
//     {/* {console.log(AuthService.login("user","@Qwerty1234"))} */}
//     {console.log(AuthService.register("user","user@example.com","@Qwerty1234"))}
//     {console.log(UserService.getPublicContent())}



function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className={style.app}>
      <Routes>
        <Route exect path='/main' element={<MainPage initialState={props.state.authState} />}/> 
        <Route path='/' element={<Authorization initialState={props.state.authState} />}/>
        {/* {console.log(AuthService.login("user","@Qwerty1234"))} */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
