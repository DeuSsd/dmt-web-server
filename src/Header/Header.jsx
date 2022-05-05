import React from "react";
import style from "./Header.module.scss";


const Header = (props) => {
    return(
        <div className={style.header}>
            <div className={style.textLogo}>
                DataMiningTools
            </div>
            <div className={style.userBox}>
                User
            </div>
        </div>
    )
}


export default Header;