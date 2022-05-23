import React from "react";
import Button from "../../../components/Button";
import style from "./NavigationPanel.module.scss"

// TODO сделать кнопку свернуть/развернуть
const NavigationPanel = (props) => {
    // debugger
    return (
        <div className={style.Navigation}>
            <div className={style.NavigationDescription}>
                Выполните конфигурацию параметров APi,
                которые будут собирать для вас данные и нажмите "Далее".
                В противном случае вернитесь на предыдущий шаг при помощи кнопки "Назад" и выберите все необходимые APi
            </div>
            <div className={style.NavigationButtons}>
                <Button
                    pathLink={props.pathLinkNext}
                    actionOnClick={props.onCangeTabCrator}
                    text="Далее"
                />
            </div>
        </div>
    )
}

export default NavigationPanel;

{/* <Button
// actionOnClick={props.onSignUpClick}
actionOnClick={props.onSignUpClick}
text="Sign Up"
/> */}