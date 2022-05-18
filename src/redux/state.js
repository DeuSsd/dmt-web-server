import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

let renderEntireTree = (state) => {};




let state = {
  authorizationPage: {
    authState: {
      'token': '',
      'login':'',
      'password':'',
      'email':'',
      'stateAuth': false,
    },
    methods:{
      login: login,
    }
  }



}

// AuthService
// UserService


function login (state) {
  // AuthService.login("user","@Qwerty1234").then(data => {
  AuthService.login(state.login,state.password).then(data => {
      state.token = data["token"];
      state.stateAuth = true;
      // console.log(initialState)
      alert(state)
  })


};


AuthService.login()



export const subscribe = (observer) => {renderEntireTree = observer;};

export default state;