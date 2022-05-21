import React from "react";
import style from "./ConfiguratorContainerAPI.module.scss"
import ParameterContainerAPI from "./parameterTemplates/ParameterContainerAPI";



const ConfiguratorContainerAPI = (props) => {
    let title = props.API.title
    let description = props.API.description


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
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{title}</span>
                </div>
            </div>
            <div className={style.contentAPI}>
                <div className={style.descriptionAPI}>
                    {description}
                </div>
                <div className={style.parametersAPI}>
                    {ParameterItems}
                </div>
            </div>
        </div>
    )
}


export default ConfiguratorContainerAPI;