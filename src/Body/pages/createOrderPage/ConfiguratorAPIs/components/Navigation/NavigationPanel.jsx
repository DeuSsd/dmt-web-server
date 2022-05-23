import React from "react";
import Button from "../../../components/Button";
import style from "./NavigationPanel.module.scss"

// TODO сделать кнопку свернуть/развернуть
const NavigationPanel = (props) => {
    // debugger
    // let props.onTabPageClickCreator(props.tabItem)
    
    // props.PreviousTab
    // props.SelectedTab
    // props.NextTab


    const SwitchToPreviousTab = () => {
        return props.onTabPageClickCreator(props.tabItem)
    }
    const SwitchToNextTab = () => {
        props.onTabPageClickCreator(props.tabItem)
    }

    return (
        <div className={style.Navigation}>
            <div className={style.NavigationDescription}>
                Выполните конфигурацию параметров APi,
                которые будут собирать для вас данные и нажмите "Далее".
                В противном случае вернитесь на предыдущий шаг при помощи кнопки "Назад" и выберите все необходимые APi
            </div>
            <div className={style.NavigationButtons}>
            {/* onTabPageClickCreator={props.onTabPageClickCreator} */}
                <Button
                    pathLink={props.pathLinkPrevious}
                    actionOnClick={SwitchToPreviousTab}
                    text="Назад"
                />
                <Button
                    pathLink={props.pathLinkNext}
                    actionOnClick={SwitchToNextTab}
                    text="Далее"
                />
            </div>
        </div>
    )
}


// pathnameLocation={props.pathnameLocation}

// <Tab 
// onTabPageClickCreator={props.onTabPageClickCreator}
// selectedPage={props.selectedPage}
// pathnameLocation={props.pathnameLocation}
//  tabItem={tabItem} 
//  tabLink={props.tabLinks[tabItem]}
//   />

export default NavigationPanel;

{/* <Button
// actionOnClick={props.onSignUpClick}
actionOnClick={props.onSignUpClick}
text="Sign Up"
/> */}