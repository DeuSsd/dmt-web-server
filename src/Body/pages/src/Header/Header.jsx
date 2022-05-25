import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
               <div>
                   {props.userName}
                </div> 
                
               <div>
               <NavLink
                    to={`/`}
                    // activeClassName={style.selected}
                    className={style.link}
                    onClick={props.onLogOutClick}
                // exact={true}
                >
                    log out
                </ NavLink>
                </div> 

               

            </div>
        </div>
        <Outlet/>
        </div>
    )
}


export default Header;