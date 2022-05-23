import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Button.module.scss";



const Button = (props) => {
    return (

        <NavLink
            to={props.pathLink}
            className={style.link}
        >
            {/* <Button
            actionOnClick={props.onSignInClick}
            text="Sign In"
        /> */}
            <div className={style.Button}>
                <button onClick={() => { props.actionOnClick() }}>
                    {props.text}
                </button>
            </div>

        </ NavLink>
    )
}


export default Button;