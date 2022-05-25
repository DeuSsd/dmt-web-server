import React from "react";
import Button from "../../../components/Button";
import style from "./NavigationPanel.module.scss"

// TODO сделать кнопку свернуть/развернуть
const NavigationPanel = (props) => {

    let next = () => {
        props.updateSelectedApisCreator()
        return props.onCangeTabCrator
    }

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
                    actionOnClick={next}
                    text="Далее"
                />
            </div>
        </div>
    )
}

export default NavigationPanel;