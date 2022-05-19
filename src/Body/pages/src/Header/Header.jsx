import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Header.module.scss";
import TabsPanelContainer from "./Tabs/TabsPanelContainer";





const Header = (props) => {
    return (
        <div>
        <div className={style.header}>
            <div>
                <div className={style.textLogo}>
                    DataMiningTools
                </div>
                <TabsPanelContainer pathnameLocation={props.pathnameLocation}/>
            </div>
            <div className={style.userBox}>
                {props.userName}
            </div>
        </div>
        <Outlet/>
        </div>
    )
}


export default Header;