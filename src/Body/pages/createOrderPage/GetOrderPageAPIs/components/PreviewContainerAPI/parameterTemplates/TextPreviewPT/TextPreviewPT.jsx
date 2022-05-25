import React from "react";
import style from "./TextPreviewPT.module.scss"


const TextPreviewPT = (props) => {

    // debugger
    console.log(props.value)
    return (
        <div className={style.TextPreviewPT}>
            <div
                className={style.DatePeviewPT}
            >
                <span>{props.value}</span>
            </div>

        </div>


    )
}


export default TextPreviewPT;