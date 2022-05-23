import { connect } from "react-redux";

import { signInCreator, signUpCreator, updateLoginTextAreaCreator, updatePasswordTextAreaCreator } from "../../../redux/authorizationReducer";

import AuthorizationPage from "./AuthorizationPage";


const mapStateToProps = (state) => {
    return {
        loginValue: state.authorization.login,
        passwordValue: state.authorization.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignInClick: () => { dispatch(signInCreator()) },
        onSignUnClick: () => { dispatch(signUpCreator()) },
        updateLoginTextArea: (body) => { dispatch(updateLoginTextAreaCreator(body)) },
        updatePasswordTextArea: (body) => { dispatch(updatePasswordTextAreaCreator(body)) }
    }
}

const AuthorizationPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage)


export default AuthorizationPageContainer;