import React from "react";
import style from "./createOrderPage.module.scss"
import HeaderContainer from "../src/Header/HeaderContainer";
import APIsGridContainer from "./APIsGrid/APIsGridContainer";
import { Route, Routes } from "react-router-dom";
import ConfiguratorAPIsContainer from "./ConfiguratorAPIs/ConfiguratorAPIsContainer";




const CreateOrderPage = (props) => {
    // let ss = props.pathnameLocation+props.tabLinks['Выбор']
    // debugger
    return (
        <div className={style.createOrderPage}>
            <Routes>
                <Route path='/' element={<HeaderContainer pathnameLocation={props.pathnameLocation} />}>
                    <Route
                        path={props.tabLinks['Выбор']}
                        element={
                            <APIsGridContainer />
                            // <div>Выбор</div>
                        }
                    />
                    <Route
                        path={props.tabLinks['Конфигурирование']}
                        element={
                            <ConfiguratorAPIsContainer />
                            // <div></div>
                        }
                    />
                    <Route
                        path={props.tabLinks['Предпросмотр']}
                        element={<div>Предпросмотр</div>}
                    />
                    <Route
                        path={props.tabLinks['Заказ']}
                        element={<div>Заказ</div>}
                    />
                </Route>
            </Routes>

            {/* <APIsGridContainer /> */}
        </div>
    )
}


export default CreateOrderPage;