import React from "react";
import style from "./createOrderPage.module.scss"
import HeaderContainer from "../src/Header/HeaderContainer";
import APIsGridContainer from "./APIsGrid/APIsGridContainer";


const CreateOrderPage = (props) => {
    // debugger
    return(
        <div className={style.createOrderPage}>
            <HeaderContainer/>
            <APIsGridContainer/>
        </div>
    )
}


export default CreateOrderPage;