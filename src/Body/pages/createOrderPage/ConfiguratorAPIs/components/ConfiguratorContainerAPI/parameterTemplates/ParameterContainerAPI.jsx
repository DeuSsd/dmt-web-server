import React from "react";
import style from "./ParameterContainerAPI.module.scss"
import InputFieldPTContainer from "./InputFieldPT/InputFieldPTContainer";
import SelectorFieldPTContainer from "./SelectorFieldPT/SelectorFieldPTContainer";



const ParameterContainerAPI = (props) => {

    const title = props.parameterObject.title_parameter;
    const parameter = props.parameterObject.parameter;
    const description = props.parameterObject.description_parameters;
    const type = props.parameterObject.type;
    const data = props.parameterObject.data;
    // debugger
    // value: ''
    let value = props.parameterObject.value;
    let selectElementType = () => {
        // debugger
        switch (type) {
            case 'date':
                return (<InputFieldPTContainer 
                    parameterAPI={parameter}
                    APiID = {props.APiID}
                    key={parameter+props.APiID}
                    value={value}
                    input_type={type}
                    />)
            case 'string': //TODO text was change to string
                return (<InputFieldPTContainer 
                    parameterAPI={parameter}
                    APiID = {props.APiID}
                    key={parameter+props.APiID}
                    value={value}
                    // input_type={'type'}  //TODO text was change to string
                    input_type={'text'} 
                    />)
            case 'float': //TODO text was change to float
                return (<InputFieldPTContainer 
                    parameterAPI={parameter}
                    APiID = {props.APiID}
                    key={parameter+props.APiID}
                    value={value}
                    // input_type={'type'}  //TODO text was change to float
                    input_type={'text'} 
                    />)
            case 'selectOne':
                return (<SelectorFieldPTContainer 
                    parameterAPI={parameter}
                    APiID = {props.APiID}
                    key={parameter+props.APiID}
                    value={value}
                    input_type={type} 
                    data={data}
                    />)
                    
            default:
                return ('')
        }
    }

    // <input id="dateRequired" type="date" name="dateRequired" />

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