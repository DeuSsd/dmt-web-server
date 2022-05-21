import React from "react";
import style from "./ParameterContainerAPI.module.scss"
import InputFieldPTContainer from "./InputFieldPT/InputFieldPTContainer";



const ParameterContainerAPI = (props) => {
    return (
        <div className={style.ParameterContainerAPI}>
            <div className={style.title}>
                Parameter 1
            </div>

            <div className={style.parameterField}>

                <InputFieldPTContainer />

            </div>
            <div className={style.description}>
                description API Parameter
            </div>
        </div>
    )
}


export default ParameterContainerAPI;