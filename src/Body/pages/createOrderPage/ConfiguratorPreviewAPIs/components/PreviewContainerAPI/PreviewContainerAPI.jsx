import React from "react";
import style from "./PreviewContainerAPI.module.scss"
import ParameterPreviewContainerAPI from "./parameterTemplates/ParameterPreviewContainerAPI";



const PreviewContainerAPI = (props) => {
    let title = props.API.title
    let description = props.API.description
    // let ConfiguratorAPiItems = props.APIsOrderID.map((APiID) => {
    //     return (
    //         <ConfiguratorContainerAPI
    //             API={props.APIs[APiID]}
    //         />
    //     )
    // })

    // debugger
    let ParameterItems = props.API.parametersOrder.map((parameterID) => {
        return (
            <ParameterPreviewContainerAPI
                APiID={props.APiID}
                key={parameterID}
                parameterObject={props.API.parameters[parameterID]}
            />
        )
    })
    // // debugger
    // let ParameterItems = props.API.parameters.map((parameterObject) => {
    //     return (
    //         <ParameterContainerAPI
    //             parameterObject={parameterObject}
    //         />
    //     )
    // })

    return (
        <div className={style.ConfiguratorContainerAPI}>
            <div className={style.header}>
                <div>
                    <span>{title}</span>
                </div>
            </div>
            <div className={style.contentAPI}>
                <div className={style.parametersAPI}>
                    {ParameterItems}
                </div>
                <div className={style.descriptionAPI}>
                    {description}
                </div>
            </div>
        </div>
    )
}


export default PreviewContainerAPI;