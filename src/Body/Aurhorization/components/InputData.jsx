import React from "react";
import style from "./InputData.module.scss";



const InputData = (props) => {
    return (
        <div className={style.InputData}>
            <div>
                {props.text}
            </div>
            <div>
                <input type={props.input_type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}


export default InputData;