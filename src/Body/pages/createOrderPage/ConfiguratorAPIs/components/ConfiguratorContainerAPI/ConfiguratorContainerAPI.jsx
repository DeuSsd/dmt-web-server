import React from "react";
import style from "./ConfiguratorContainerAPI.module.scss"
import ParameterContainerAPI from "./parameterTemplates/ParameterContainerAPI";



const ConfiguratorContainerAPI = (props) => {
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
            <ParameterContainerAPI
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
                <div>
                    <span>{title} </span>
                    {/* <span>{title} </span> //TODO добавить завершено 0/3 */}
                </div>
                <div>
                    <span>{title}</span>
                    {/* <span>{"Описание параметра"}</span> //TODO  баг с отображением заголовка Описание параметра 0/3 */}
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