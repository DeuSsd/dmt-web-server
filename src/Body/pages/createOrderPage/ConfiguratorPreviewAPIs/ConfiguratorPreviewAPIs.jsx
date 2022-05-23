import React from "react";
import NavigationPanelContainer from "./components/Navigation/NavigationPanelContainer";
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
            <NavigationPanelContainer
                pathLinkPrevious={props.pathLinkPrevious}
                pathLinkNext={props.pathLinkNext}
                PreviousTab={props.PreviousTab}
                // SelectedTab={props.SelectedTab}
                NextTab={props.NextTab}
            />
            <div
                className={style.ConfiguratorPreviewAPIs}>
                {ConfiguratorAPiItems}
            </div>
            <NavigationPanelContainer
                pathLinkPrevious={props.pathLinkPrevious}
                pathLinkNext={props.pathLinkNext}
                PreviousTab={props.PreviousTab}
                // SelectedTab={props.SelectedTab}
                NextTab={props.NextTab}
            />



        </div>
    )
}

export default ConfiguratorPreviewAPIs;