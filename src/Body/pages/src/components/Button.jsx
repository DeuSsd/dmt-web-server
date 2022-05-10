import React from "react";
import style from "./Button.module.scss";



const Button = (props) => {
    return (
        <div className={style.Button}>
            <button onClick={() => {props["onClick"](props.initialState)}}>
                {props.text}
            </button>
        </div>
    )
}


export default Button;