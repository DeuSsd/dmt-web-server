import React from "react";
import Authorization from "./Aurhorization/Authorization";
import style from "./Body.module.scss";


const Body = (props) => {
    return(
        <div className={style.Body}>
            <Authorization />
        </div>
    )
}


export default Body;