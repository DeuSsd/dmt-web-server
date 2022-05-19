import React from "react";
import style from "./Header.module.scss";
import TabsPanelContainer from "./Tabs/TabsPanelContainer";





const Header = (props) => {

    return (
        <div className={style.header}>
            <div>
                <div className={style.textLogo}>
                    DataMiningTools
                </div>
                <TabsPanelContainer/>
            </div>
            <div className={style.userBox}>
                {props.userName}
            </div>
        </div>
    )
}


export default Header;