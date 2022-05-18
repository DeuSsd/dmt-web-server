import React from "react";
import style from "./InputData.module.scss";



const InputData = (props) => {

    let onTextAreaValueChange = (e) => {
        let body = e.target.value;
        props.onChange(body);
    }

    console.log(props.value)
    return (
        <div className={style.InputData}>
            <div>
                {props.text}
            </div>
            <div>
                <input onChange={onTextAreaValueChange} value={props.value} type={props.input_type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}


export default InputData;