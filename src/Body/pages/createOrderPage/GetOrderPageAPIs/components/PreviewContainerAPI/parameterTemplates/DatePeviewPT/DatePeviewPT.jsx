import React from "react";
import style from "./DatePeviewPT.module.scss"



const DatePeviewPT = (props) => {
    // debugger
    return (
        <div
            className={style.DatePeviewPT}
        >
            <span>{props.value}</span>
        </div>
    )
}


// parameterAPI={parameter}
// APiID = {props.APiID}
// key={parameter}
// value={value}
// input_type={type}

export default DatePeviewPT;