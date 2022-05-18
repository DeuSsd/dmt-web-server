import { connect } from "react-redux";

import { logInCreator, signInCreator, updateLoginTextAreaCreator, updatePasswordTextAreaCreator } from "../../../redux/authorizationReducer";

import AuthorizationPage from "./AuthorizationPage";



// const AuthorizationPagseContainer = (props) => {
//     let state = props.store.getState();

//     let onLogInClick = () => {
//         props.store.dispatch(logInCreator())
//     }

//     let onSignInClick = () => {
//         props.store.dispatch(signInCreator())
//     }

//     return (
//         <AuthorizationPage

//         />
//     )
// }

const mapStateToProps = (state) => {
    return {
        loginValue: state.authorizationPage.login,
        passwordValue: state.authorizationPage.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogInClick: () => { dispatch(logInCreator()) },
        onSignInClick: () => { dispatch(signInCreator()) },
        updateLoginTextArea: (body) => {dispatch(updateLoginTextAreaCreator(body))},
        updatePasswordTextArea: (body) => {dispatch(updatePasswordTextAreaCreator(body))}
    }
}

const AuthorizationPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage)



export default AuthorizationPageContainer;