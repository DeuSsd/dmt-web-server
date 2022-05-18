import { connect } from "react-redux";

import { logInCreator, signInCreator, updateLoginTextAreaCreator, updatePasswordTextAreaCreator } from "../../../redux/authorizationReducer";

import AuthorizationPage from "./AuthorizationPage";


const mapStateToProps = (state) => {
    return {
        loginValue: state.authorization.login,
        passwordValue: state.authorization.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogInClick: () => { dispatch(logInCreator()) },
        onSignInClick: () => { dispatch(signInCreator()) },
        updateLoginTextArea: (body) => { dispatch(updateLoginTextAreaCreator(body)) },
        updatePasswordTextArea: (body) => { dispatch(updatePasswordTextAreaCreator(body)) }
    }
}

const AuthorizationPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage)


export default AuthorizationPageContainer;