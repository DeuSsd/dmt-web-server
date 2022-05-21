import React from "react";
import style from "./InputFieldPT.module.scss"


const InputFieldPT = (props) => {

    let onTextAreaValueChange = (e) => {

        let typeParameterAPI = props.typeParameterAPI;
        let valueParameterAPI = e.target.value;

        props.updateAPIParameterInputAreaCreator(typeParameterAPI, valueParameterAPI);
    }

    console.log(props.value)
    return (
        <div className={style.InputData}>
            <div>
                {props.text}
            </div>
            <div>
                <input
                    onChange={onTextAreaValueChange}
                    value={props.value}
                    // type={props.input_type}
                    placeholder={props.placeholder} />
            </div>
        </div>
    )
}



export default InputFieldPT;