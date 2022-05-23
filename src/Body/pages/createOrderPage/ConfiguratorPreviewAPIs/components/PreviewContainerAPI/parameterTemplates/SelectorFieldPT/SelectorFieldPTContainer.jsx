import { connect } from "react-redux";
import { updateAPIParameterInputAreaCreator } from "../../../../../../../../redux/createOrderReducer";


import SelectorFieldPT from "./SelectorFieldPT";


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
         (APiID,typeParameterAPI, valueParameterAPI) => 
         {dispatch(updateAPIParameterInputAreaCreator(APiID,typeParameterAPI, valueParameterAPI))}
    }
}

const SelectorFieldPTContainer = connect(
    mapStateToProps, mapDispatchToProps)(SelectorFieldPT)


export default SelectorFieldPTContainer;