import AuthService from "./services/auth.service";
import UserService from "./services/user.service";

const LOG_IN = 'LOG_IN'
const SIGN_IN = 'SIGN_IN'
const INPUT_LOGIN_TEXT_UPDATE = 'INPUT_LOGIN_TEXT_UPDATE'
const INPUT_PASSWORD_TEXT_UPDATE = 'INPUT_PASSWORD_TEXT_UPDATE'

let initialState = {
    'token': '',
    'login': "user",
    'password': "@Qwerty1234",
    'email': '',
    'stateAuth': false,
}

let authorizationReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        case LOG_IN: {
            copyState = { ...state }
            let login = state.login
            let password = state.password
            AuthService.login(login, password).then(data => {
                copyState.token = data.token;
                copyState.stateAuth = true;
                console.log(copyState)
            })
            return copyState
        }
        case SIGN_IN: {
            UserService.getPublicContent(state)
            return state
        }
        case INPUT_LOGIN_TEXT_UPDATE: {
            return {
                ...state,
                login: action.body
            }
        }
        case INPUT_PASSWORD_TEXT_UPDATE: {
            return {
                ...state,
                password: action.body
            }
        }
        default:
            return state
    }
}

export const logInCreator = () => ({ type: LOG_IN })
export const signInCreator = () => ({ type: SIGN_IN })
export const updateLoginTextAreaCreator = (body) => ({ type: INPUT_LOGIN_TEXT_UPDATE, body: body })
export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default authorizationReducer;
