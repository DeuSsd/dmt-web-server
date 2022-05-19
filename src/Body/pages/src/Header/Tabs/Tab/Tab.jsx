import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Tab.module.scss";


const Tab = (props) => {
    // let pathnameLocation = useLocation().pathname
    return (
        <div className={`${style.Tab} ${props.selectedPage === props.item ? style.selected : ''}`}>
            <div>
                <NavLink
                    to={`${props.pathnameLocation}${props.tabLink}`}
                    activeClassName={style.selected}
                    className={style.textLink}
                    // exact={true}
                >
                    {props.tabItem}
                </NavLink>
            </div>
        </div>
    )
}

export default Tab;