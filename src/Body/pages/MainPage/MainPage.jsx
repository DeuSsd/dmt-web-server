import React from "react";
import style from "./MainPage.module.scss";
import Header from "../src/Header/Header";


const MainPage = (props) => {
    return(
        <div className={style.MainPage}>
            <Header />
            {/* Successed */}
        </div>
    )
}


export default MainPage;