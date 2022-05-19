import React from "react";
import style from "./Tab.module.scss";


const Tab = (props) => {
    return (
        <div className={props.selectedPage == props.item  ? style.TabSelected : style.TabUnselected}>
            {/* <div className={style.text}> */}
                {props.item}
            {/* </div> */}
        </div>
    )
}

export default Tab;