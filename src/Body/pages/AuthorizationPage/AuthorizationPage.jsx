import React from "react";
import style from "./AuthorizationPage.module.scss";
import Button from "../src/components/Button";
import InputData from "../src/components/InputData";


import AuthService from "../../../services/auth.service";



// {/* {console.log(AuthService.login("user","@Qwerty1234"))} */}


function login (initialState) {
    AuthService.login("user","@Qwerty1234").then(data => {
        initialState["token"] = data["token"];
        initialState["stateAuth"] = true;
        console.log(initialState)
    })
};


// function temp(initialState) {
//     console.log(initialState["token"])
//     login (initialState).then(
//         console.log(initialState["token"]))

// }


const AuthorizationPage = (props) => {
    return(
        <div className={style.Authorization}>
            <div >
                <div className={style.text}>
                    Выполните вход
                </div>
            </div>
            <div>
                <InputData input_type = "text" text="Login:" placeholder="Login" />
            </div>
            <div>
                <InputData input_type = "password" text="Password:" placeholder="Password" />
            </div>
            <div className={`${style.Button__place}`}>
                <Button initialState={props.initialState} onClick={login} text="Sign In" />
                <Button initialState={props.initialState} onClick={() => {console.log(props.initialState)}} text="Sign Up" />     
            </div>
        </div>
    )
}




export default AuthorizationPage;