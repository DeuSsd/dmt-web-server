import React from "react";
import style from "./Tab.module.scss";


const Tab = (props) => {
    return (
        <div className={`${style.Tab} ${props.selectedPage === props.item ? style.selected : ''}`}>
            <div className={style.text}>
                {props.item}
            </div>
        </div>
    )
}

export default Tab;