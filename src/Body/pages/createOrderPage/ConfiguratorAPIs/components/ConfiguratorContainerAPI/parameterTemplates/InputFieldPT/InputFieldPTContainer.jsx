import { connect } from "react-redux";
import { updateAPIParameterInputAreaCreator } from "../../../../../../../../redux/createOrderReducer";


import InputFieldPT from "./InputFieldPT";


const mapStateToProps = (state) => {
    return {
        // loginValue: state.authorization.login,
        // passwordValue: state.authorization.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onSignInClick: () => { dispatch(signInCreator()) },
        // onSignUnClick: () => { dispatch(signUpCreator()) },
        // updateLoginTextArea: (body) => { dispatch(updateLoginTextAreaCreator(body)) },
        updateAPIParameterInputAreaCreator:
         (typeParameterAPI, valueParameterAPI) => 
         {dispatch(updateAPIParameterInputAreaCreator(typeParameterAPI, valueParameterAPI))}
    }
}

const InputFieldPTContainer = connect(mapStateToProps, mapDispatchToProps)(InputFieldPT)


export default InputFieldPTContainer;