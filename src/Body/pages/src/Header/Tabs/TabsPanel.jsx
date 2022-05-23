import React from "react";
import Tab from "./Tab/Tab";
import style from "./TabsPanel.module.scss";


const TabsPanel = (props) => {


    let tabsElements = props.tabPages.map(
        tabItem =>
            <Tab
                onTabPageClickCreator={props.onTabPageClickCreator}
                selectedPage={props.selectedPage}
                pathnameLocation={props.pathnameLocation}
                tabItem={tabItem}
                tabLink={props.tabLinks[tabItem]}
            />
    )



    return (
        <div className={style.TabPanel} >
            {tabsElements}
        </div>
    )
}

export default TabsPanel;