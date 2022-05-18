
let initialState = {
    APIs: {
        weatherAPI: {
            id: '1',
            title: 'Погода',
            api: 'weatherAPI',
            parameters: []
        },
        COVID_API: {
            id: '2',
            title: 'Погода',
            api: 'COVID_API',
            parameters: []
        },
        COVID_API_2: {
            id: '3',
            title: 'Погода',
            api: 'COVID_API_2',
            parameters: []
        },
        COVID_API_3: {
            id: '4',
            title: 'Погода',
            api: 'COVID_API_3',
            parameters: []
        },
    },

    APIsColumns: {
        SelectedAPIs: {
            id: '1',
            title: 'SelectedAPIs',
            APIsId: ['COVID_API_3'],
        },
        UnselectedAPIs: {
            id: '2',
            title: 'UnselectedAPIs',
            APIsId: ['weatherAPI', 'COVID_API', 'COVID_API_2'],
        }
    },


    APIsColumnsOrder: ['SelectedAPIs','UnselectedAPIs']
}
// tasks: {
//         'task': { id: 'task', content: 'Some content' },
//         'task1': { id: 'task1', content: 'Some content' },
//         'task2': { id: 'task2', content: 'Some content' },
//         'task3': { id: 'task3', content: 'Some content' },
//         'task4': { id: 'task4', content: 'Some content' },
//         'task5': { id: 'task5', content: 'Some content' },
//     },

//     columns: {
//         'coloumn-1': {
//             id: 'column1',
//             title: 'todo',
//             tasksID: ['task1', 'task2', 'task3', 'task4', 'task5']
//         },


let createOrderReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        // case LOG_IN: {
        //     copyState = { ...state }
        //     let login = state.login
        //     let password = state.password
        //     AuthService.login(login, password).then(data => {
        //         copyState.token = data.token;
        //         copyState.stateAuth = true;
        //         console.log(copyState)
        //     })
        //     return copyState
        // }
        // case SIGN_IN: {
        //     UserService.getPublicContent(state)
        //     return state
        // }
        // case INPUT_LOGIN_TEXT_UPDATE: {
        //     return {
        //         ...state,
        //         login: action.body
        //     }
        // }
        // case INPUT_PASSWORD_TEXT_UPDATE: {
        //     return {
        //         ...state,
        //         password: action.body
        //     }
        // }
        default:
            return state
    }
}

// export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default createOrderReducer;
