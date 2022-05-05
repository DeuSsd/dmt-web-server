import React from "react";
import style from "./Authorization.module.scss";
import Button from "./components/Button";
import InputData from "./components/InputData";



const Authorization = (props) => {
    return(
        <div className={style.Authorization}>
            
            
            <div >
                <div className={style.text}>
                    Выполните вход или регистрацию
                </div>
            </div>
            <div>
                <InputData input_type = "text" text="Login:" placeholder="Login" />
            </div>
            <div>
                <InputData input_type = "password" text="Password:" placeholder="Password" />
            </div>
            
          
            <div className={`${style.Button__place}`}>
                <Button text="Sign In" />
                <Button text="Sign Up" />
            </div>
        </div>
    )
}


export default Authorization;