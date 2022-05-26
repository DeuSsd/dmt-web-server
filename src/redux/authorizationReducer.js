import AuthService from "./services/auth.service";
import UserService from "./services/user.service";

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'

const LOG_OUT = 'LOG_OUT'
// const GET_FILE = 'GET_FILE'

const INPUT_LOGIN_TEXT_UPDATE = 'INPUT_LOGIN_TEXT_UPDATE'
const INPUT_PASSWORD_TEXT_UPDATE = 'INPUT_PASSWORD_TEXT_UPDATE'

let initialState = {
    'token': '',
    'name': 'Denis O.',
    'login': "user",
    'password': "@Qwerty1234",
    'email': '',
    'stateAuth': false,
}

// let initialState = {
//     'token': '',
//     'name': '',
//     'login': '',
//     'password': '',
//     'email': '',
//     'stateAuth': false,
// }

let authorizationReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        case SIGN_IN: {
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
        case LOG_OUT: {
            return {
                ...state,
                'token': '',
                'name': '',
                'login': "",
                'password': "",
                'email': '',
                'stateAuth': false,
            }
        }
        case SIGN_UP: {
  
            UserService.getResultFile(state)

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

export const signInCreator = () => ({ type: SIGN_IN })
export const signUpCreator = () => ({ type: SIGN_UP })
export const logOutCreator = () => ({ type: LOG_OUT })

export const updateLoginTextAreaCreator = (body) => ({ type: INPUT_LOGIN_TEXT_UPDATE, body: body })
export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default authorizationReducer;
