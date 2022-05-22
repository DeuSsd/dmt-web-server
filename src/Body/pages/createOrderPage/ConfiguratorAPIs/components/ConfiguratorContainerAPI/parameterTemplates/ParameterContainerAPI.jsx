import React from "react";
import style from "./ParameterContainerAPI.module.scss"
import InputFieldPTContainer from "./InputFieldPT/InputFieldPTContainer";



const ParameterContainerAPI = (props) => {

    const title = props.parameterObject.title_parameter;
    const parameter = props.parameterObject.parameter;
    const description = props.parameterObject.description_parameters;
    const type = props.parameterObject.type;
    // value: ''


    let selectElementType = () => {
        switch (type) {
            case 'time':
                // <input id="dateRequired" type="date" name="dateRequired" />
                return (<InputFieldPTContainer 
                    key={parameter}
                    input_type="date" 
                    />)
            default:
                return ('')
        }
    }

    
// type = {
//     "select" : "выбор из выпадающего списка",
//     "date": "Выбор даты",
//     "time": "Выбор времени",
//     "datetime": "Выбор даты и времени",
//     "selectOne": "Выбор одного из [ O X O O O ]",
//     "selectMany": "Выбор многих из [ O X O X O ]",
//     "text": "Ввод текста",
//     "number": "Ввод числа",
// }





    return (
        <div className={style.ParameterContainerAPI}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.parameterField}>
                {selectElementType()}
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}


export default ParameterContainerAPI;