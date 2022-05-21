import React from "react";
import style from "./ParameterContainerAPI.module.scss"
import InputFieldPTContainer from "./InputFieldPT/InputFieldPTContainer";



const ParameterContainerAPI = (props) => {

    const title = props.parameterObject.title_parameter;
    const parameter = props.parameterObject.parameter;
    const description = props.parameterObject.description_parameters;
    const type = props.parameterObject.type;
    // value: ''
    return (
        <div className={style.ParameterContainerAPI}>
            <div className={style.title}>
                {title}
            </div>

            <div className={style.parameterField}>
                <InputFieldPTContainer />
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}


export default ParameterContainerAPI;