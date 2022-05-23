import React from "react";
import style from "./InputFieldPT.module.scss"


const InputFieldPT = (props) => {

    let onTextAreaValueChange = (e) => {
        let APiID = props.APiID
        let parameterAPI = props.parameterAPI;
        let valueParameterAPI = e.target.value;
        debugger
        props.updateAPIParameterInputAreaCreator(APiID, parameterAPI, valueParameterAPI);
    }

    // debugger
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
                    type={props.input_type}
                    placeholder={props.placeholder} />
            </div>
          
        </div>


    )
}


export default InputFieldPT;