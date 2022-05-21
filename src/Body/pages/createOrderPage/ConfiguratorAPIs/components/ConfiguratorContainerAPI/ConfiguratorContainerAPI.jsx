import React from "react";
import style from "./ConfiguratorContainerAPI.module.scss"
import ParameterContainerAPI from "./parameterTemplates/ParameterContainerAPI";



const ConfiguratorContainerAPI = (props) => {
    let title = props.API.title
    let description = props.API.description
    let parameters = props.API.parameters



    // debugger
    let ParameterItems = props.API.parameters.map((parameterObject) => {
        return (
            <ParameterContainerAPI
                parameterObject={parameterObject}
            />
        )
    })

    return (
        <div className={style.ConfiguratorContainerAPI}>
            <div className={style.header}>
                header
            </div>
            <div className={style.contentAPI}>
                <div className={style.descriptionAPI}>
                    description API
                </div>
                <div className={style.parametersAPI}>
                    {ParameterItems}
                    {/* <ParameterContainerAPI />
                    <ParameterContainerAPI />
                    <ParameterContainerAPI />
                    <ParameterContainerAPI />
                    <ParameterContainerAPI /> */}
                    {/* <div  className={style.oneParameterAPI}>
                        <InputFieldPTContainer/>
                         </div>
                    <div  className={style.oneParameterAPI}> something </div>
                    <div  className={style.oneParameterAPI}> something </div>
                    <div  className={style.oneParameterAPI}> something </div>
                    <div  className={style.oneParameterAPI}> something </div>
                    <div  className={style.oneParameterAPI}> something </div> */}
                </div>

            </div>

        </div>
    )
}


export default ConfiguratorContainerAPI;