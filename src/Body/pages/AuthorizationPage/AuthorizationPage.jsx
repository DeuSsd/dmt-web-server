import React from "react";
import style from "./AuthorizationPage.module.scss";
import Button from "../src/components/Button";
import InputData from "../src/components/InputData";
import { NavLink } from "react-router-dom";

const AuthorizationPage = (props) => {
    return (
        <div className={style.Authorization}>
            <div >
                <div className={style.text}>
                    Выполните вход
                </div>
            </div>
            <div>
                <InputData
                    onChange={props.updateLoginTextArea}
                    value={props.loginValue}
                    input_type="text"
                    text="Login:"
                    placeholder="Login"
                />
            </div>
            <div>
                <InputData
                    onChange={props.updatePasswordTextArea}
                    value={props.passwordValue}
                    input_type="password"
                    text="Password:"
                    placeholder="Password"
                />
            </div>
            <div className={`${style.Button__place}`}>

                < NavLink
                    to={`${props.pathnameLocation}/api-choose`}
                    className={style.link}
                >
                    <Button
                        actionOnClick={props.onSignInClick}
                        text="Sign In"
                    />
                </ NavLink>
                <Button
                    actionOnClick={props.onSignUpClick}
                    text="Sign Up"
                />
            </div>
        </div>
    )
}




export default AuthorizationPage;