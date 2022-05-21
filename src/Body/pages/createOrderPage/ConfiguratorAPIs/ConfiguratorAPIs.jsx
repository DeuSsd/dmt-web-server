import React from "react";
import ConfiguratorContainerAPI from "../ConfiguratorAPIs/components/ConfiguratorContainerAPI/ConfiguratorContainerAPI";
import style from "./ConfiguratorAPIs.module.scss"

const ConfiguratorAPIs = (props) => {
    let ConfiguratorAPiItems = props.APIsOrderID.map((APiID) => {
        return (
            <ConfiguratorContainerAPI 
            API={props.APIs[APiID]}
            />
        )
    })

    // debugger
    return (
        <div> 
            
            <div
                className={style.ConfiguratorAPIs}>

                    {ConfiguratorAPiItems}
            </div>


        </div>


    )
}

export default ConfiguratorAPIs;