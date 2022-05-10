import React from 'react';
// import Authorization from './Body/Aurhorization/Authorization';
// import Header from './Header/Header';
// import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.scss";

// import AuthService from "./services/auth.service";
// import UserService from './services/user.service';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Authorization from './AuthorizationPage/AuthorizationPage';
import MainPage from './MainPage/MainPage';


//  // {/* <Header /> */}
//     {/* {console.log(AuthService.login("user","@Qwerty1234"))} */}
//     {console.log(AuthService.register("user","user@example.com","@Qwerty1234"))}
//     {console.log(UserService.getPublicContent())}


function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
      <Routes>
        <Route path='/' element={<MainPage/>}/> 
        <Route path='/auth' element={<Authorization/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
