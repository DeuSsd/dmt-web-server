import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorizationReducer'
import createOrderReducer from './createOrderReducer';


let store = configureStore(
    {
        reducer: {
            authorization: authorizationReducer,
            createOrderPage: createOrderReducer,
        }
    })


export default store;

window.store = store;
