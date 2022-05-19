import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Tab.module.scss";


const Tab = (props) => {
    let pathnameLocation = `${style.Tab} ${props.selectedPage === props.tabItem ? style.selected : ''}`
    // debugger
    // ${props.selectedPage === props.item ? style.selected : ''}`
    return (
        // <div className={`${style.Tab}`}>
        // {/* <div> */ }
        < NavLink
            to={`${props.pathnameLocation}${props.tabLink}`}
            // activeClassName={style.selected}
            className={style.link}
        // exact={true}
        >

            <div 
            onClick={() => props.onTabPageClickCreator(props.tabItem)}
            className={`${style.Tab} ${props.selectedPage === props.tabItem ? style.selected : ''}`}>
            {/* className={`${props.selectedPage === props.tabItem ? style.selected : ''}`}> */}
                <div className={style.textLink}>
                    {props.tabItem}
                </div>
            </div>

        </ NavLink>
    )
}

export default Tab;


