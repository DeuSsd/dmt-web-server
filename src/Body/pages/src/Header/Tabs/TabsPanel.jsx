import React from "react";
import Tab from "./Tab/Tab";
import style from "./TabsPanel.module.scss";


const TabsPanel = (props) => {

    
    let tabsElements = props.tabPages.map((item) => {
        return (
            <Tab selectedPage={props.selectedPage} item={item}/>
        )
    })



    return (
        <div className={style.TabPanel} >
           {tabsElements}
        </div>
    )
}

export default TabsPanel;