import React from "react";
import ConfiguratorContainerAPI from "../ConfiguratorAPIs/components/ConfiguratorContainerAPI/ConfiguratorContainerAPI";
import style from "./ConfiguratorAPIs.module.scss"

const ConfiguratorAPIs = (props) => {

    // debugger
    return (
        <div> 
            
            <div
                className={style.ConfiguratorAPIs}>
                    <ConfiguratorContainerAPI/>
            </div>


        </div>


    )
}

export default ConfiguratorAPIs;