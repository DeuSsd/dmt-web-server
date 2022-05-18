import React from "react";
import style from "./APiCell.module.scss"


const APiCell = (props) => {
    let title = props.APi.title
    // debugger
    return (

        <div
            className={style.APiCell}
            {...props}
            ref={props.innerRef}

        >
            {props.APi.api}
        </div>
    )
}


export default APiCell;