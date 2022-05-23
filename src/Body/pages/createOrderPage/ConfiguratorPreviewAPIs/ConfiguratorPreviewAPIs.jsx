import React from "react";
import PreviewContainerAPI from "./components/PreviewContainerAPI/PreviewContainerAPI";
// import ConfiguratorContainerAPI from "../ConfiguratorAPIs/components/ConfiguratorContainerAPI/ConfiguratorContainerAPI";
import style from "./ConfiguratorPreviewAPIs.module.scss"

// TODO сделать кнопку свернуть/развернуть
const ConfiguratorPreviewAPIs = (props) => {
    let ConfiguratorAPiItems = props.APIsOrderID.map((APiID) => {
        return (
            <PreviewContainerAPI
                APiID={APiID}
                key={APiID}
                API={props.APIs[APiID]}
            />
        )
    })

    // debugger
    return (
        <div>
            <div
                className={style.ConfiguratorPreviewAPIs}>
                {ConfiguratorAPiItems}
                {/* dsd */}
            </div>
        </div>
    )
}

export default ConfiguratorPreviewAPIs;