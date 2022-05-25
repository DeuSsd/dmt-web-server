import React from "react";
import style from "./ParameterPreviewContainerAPI.module.scss"
import SelectorFieldPTContainer from "./SelectorFieldPT/SelectorFieldPTContainer";
import DatePeviewPT from "./DatePeviewPT/DatePeviewPT";
import TextPreviewPT from "./TextPreviewPT/TextPreviewPT";



const ParameterPreviewContainerAPI = (props) => {

    const title = props.parameterObject.title_parameter;
    // const parameter = props.parameterObject.parameter;
    // const description = props.parameterObject.description_parameters;
    const type = props.parameterObject.type;
    // const data = props.parameterObject.data;
    // debugger
    // value: ''
    let value = props.parameterObject.value;
    
    let selectElementType = () => {
        // debugger
        switch (type) {
            case 'date':
                return (<DatePeviewPT 
                    value={value}
                    input_type={type}
                    />)
            case 'text':
                return (<TextPreviewPT 
                    value={value}
                    input_type={type} 
                    />)
            case 'string':
                return (<TextPreviewPT 
                    value={value}
                    input_type={'text'} 
                    />)
            case 'float':
                return (<TextPreviewPT 
                    value={value}
                    input_type={'text'} 
                    />)
            case 'selectOne':
                return (<TextPreviewPT 
                    value={value}
                    input_type={type} 
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
        <div className={style.ParameterPreviewContainerAPI}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.parameterField}>
                {selectElementType()}
            </div>
            {/* <div className={style.description}>
                {description}
            </div> */}
        </div>
    )
}


export default ParameterPreviewContainerAPI;