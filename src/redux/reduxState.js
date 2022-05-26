import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'
import createOrderReducer from './createOrderReducer';

import thunkMiddleware from 'redux-thunk'

// let store = configureStore(
//     {
//         reducer: {
//             authorization: authorizationReducer,
//             createOrderPage: createOrderReducer,
//         }
//     })

// custom combine reducers
const rootReducer = (state = {}, action) => {

    const getToken = () => state.authorization.token;
    const getStateAuth = () => state.authorization.stateAuth;

    return {
    //   languages: languages(state.languages, action),
      // merge languageCodes with original action object, now you have access in translations reducer
    //   translations: translations(state.translations, {...action, languageCodes})
   
      authorization: authorizationReducer(state.authorization, action),
      createOrderPage: createOrderReducer(state.createOrderPage, {...action, getToken,getStateAuth }),
   
    };
}



let store = configureStore({
    reducer:rootReducer,
    middleware: [thunkMiddleware],
}
)


export default store;

window.store = store;
