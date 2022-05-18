import React from "react";
import style from "./APiCell.module.scss"


const APiCell = (props) => {
    let title = props.APi.title
    // debugger
    return (
        <div className={style.APiCell}>
            {props.APi.api}
            {/* asdasd */}
        </div>
     
    )
}


export default APiCell;