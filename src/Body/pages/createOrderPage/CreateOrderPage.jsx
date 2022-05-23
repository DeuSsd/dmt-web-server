import React from "react";
import style from "./CreateOrderPage.module.scss"
import HeaderContainer from "../src/Header/HeaderContainer";
import APIsGridContainer from "./APIsGrid/APIsGridContainer";
import { Route, Routes } from "react-router-dom";
import ConfiguratorAPIsContainer from "./ConfiguratorAPIs/ConfiguratorAPIsContainer";
import ConfiguratorPreviewAPIsContainer from "./ConfiguratorPreviewAPIs/ConfiguratorPreviewAPIsContainer";
import GetOrderPageAPIsContainer from "./GetOrderPageAPIs/GetOrderPageAPIsContainer";


const CHOICE_TAB = 'Выбор'
const CONFIGURATION_TAB = 'Конфигурирование'
const PREVIEW_TAB = 'Предпросмотр'
const OPDER_TAB = 'Заказ'

const CreateOrderPage = (props) => {
    // let ss = props.pathnameLocation+props.tabLinks['Выбор']
    // debugger
    return (
        <div className={style.createOrderPage}>
            <Routes>
                <Route path='/' element={<HeaderContainer pathnameLocation={props.pathnameLocation} />}>
                    <Route
                        path={props.tabLinks[CHOICE_TAB]}
                        element={
                            <APIsGridContainer
                                // SelectedTab={CHOICE_TAB}
                                // pathLinkPrevious={props.pathnameLocation + props.tabLinks[CONFIGURATION_TAB]}
                                // PreviousTab={CONFIGURATION_TAB}
                                pathLinkNext={props.pathnameLocation + props.tabLinks[CONFIGURATION_TAB]}
                                NextTab={CONFIGURATION_TAB}

                            />
                        }
                    />
                    <Route
                        path={props.tabLinks[CONFIGURATION_TAB]}
                        element={
                            <ConfiguratorAPIsContainer
                                // SelectedTab={CONFIGURATION_TAB}
                                pathLinkPrevious={props.pathnameLocation + props.tabLinks[CHOICE_TAB]}
                                PreviousTab={CHOICE_TAB}
                                pathLinkNext={props.pathnameLocation + props.tabLinks[PREVIEW_TAB]}
                                NextTab={PREVIEW_TAB}
                            />
                        }
                    />
                    <Route
                        path={props.tabLinks[PREVIEW_TAB]}
                        element={<ConfiguratorPreviewAPIsContainer
                            // SelectedTab={PREVIEW_TAB}
                            pathLinkPrevious={props.pathnameLocation + props.tabLinks[CONFIGURATION_TAB]}
                            PreviousTab={CONFIGURATION_TAB}
                            pathLinkNext={props.pathnameLocation + props.tabLinks[OPDER_TAB]}
                            NextTab={OPDER_TAB}

                        />}
                    />
                    <Route
                        path={props.tabLinks[OPDER_TAB]}
                        element={<GetOrderPageAPIsContainer />}
                    />
                </Route>
            </Routes>

            {/* <APIsGridContainer /> */}
        </div>
    )
}


export default CreateOrderPage;