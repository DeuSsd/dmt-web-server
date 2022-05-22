const DRAG_END_SELECTOR_API = 'DRAG_END_SELECTOR_API'
const SELECT_PAGE = 'SELECT_PAGE'
const INPUT_API_PARAMETER_DATA_UPDATE = 'INPUT_API_PARAMETER_DATA_UPDATE'


let initialState = {
    Pages: [
        'Выбор',
        'Конфигурирование',
        'Предпросмотр',
        'Заказ'],

    TabLinks: {
        'Выбор': '/api-choose',
        'Конфигурирование': '/api-configure',
        'Предпросмотр': '/api-preview',
        'Заказ': '/api-order'
    },

    SelectedPage: 'Выбор',

    APIsOrderID: ['1', '2', '3', '4'],

    APIs: {
        '1': {
            id: '1',
            title: 'Погода',
            api: 'weatherAPI',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: ''
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: ''
                },
            }
        },
        '2': {
            id: '2',
            title: 'Погода',
            api: 'COVID_API',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: ''
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: ''
                },
            }
        },
        '3': {
            id: '3',
            title: 'Погода',
            api: 'COVID_API_2',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: ''
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: ''
                },
            }
            // parametersOrder: [
            //     '1','2'
            // ],
            // parameters: {
            //     '1':{
            //         title_parameter: "Время начала",
            //         parameter: "start_time",
            //         type: "time",
            //         description_parameters: 'Параметр отвечающий за начало выборки',
            //     },
            //     '2':{
            //         title_parameter: "Время начала",
            //         parameter: "start_time",
            //         type: "time",
            //         description_parameters: 'Параметр отвечающий за конец выборки',
            //     },
        },

        '4': {
            id: '4',
            title: 'Погода',
            api: 'COVID_API_3',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: ''
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: ''
                },
            }
        },
    },

    APIsColumns: {
        UnselectedAPIs: {
            id: 'UnselectedAPIs',
            title: 'Доступные API',
            APIsId: ['1', '2', '3', '4'],
        },
        SelectedAPIs: {
            id: 'SelectedAPIs',
            title: 'Выбранные API',
            APIsId: [],
        }
    },

    APIsColumnsOrder: ['UnselectedAPIs', 'SelectedAPIs']
}


let createOrderReducer = (state = initialState, action) => {
    let copyState;
    // let ss = {
    //     "draggableId": "1",

    //     "source": {
    //         "index": 0,
    //         "droppableId": "2"
    //     },

    //     "destination": {
    //         "droppableId": "1",
    //         "index": 0
    //     },
    // }

    // {
    //     "draggableId": "4",

    //     "source": {
    //         "index": 0,
    //         "droppableId": "SelectedAPIs"
    //     },

    //     "destination": {
    //         "droppableId": "UnselectedAPIs",
    //         "index": 1
    //     },
    // }


    switch (action.type) {
        case SELECT_PAGE:

            // debugger
            return {
                ...state,
                SelectedPage: action.selectedPage,
            }

        case DRAG_END_SELECTOR_API:
            const { destination, source, draggableId } = action.result;

            let dropAPiByID = (DragableId, APIsId) => {
                // debugger
                let indexOfDragableId = APIsIdSource.indexOf(DragableId);
                if (indexOfDragableId !== -1) {
                    APIsId.splice(indexOfDragableId, 1);
                    // debugger
                }
                return APIsId;
            }

            // debugger
            if (!destination) {
                return state;
            }

            let APIsIdSource = [...state.APIsColumns[source.droppableId].APIsId]
            APIsIdSource = dropAPiByID(draggableId, APIsIdSource)
            let APIsIdDestination = [...state.APIsColumns[destination.droppableId].APIsId, draggableId]

            // debugger


            if (
                destination.droppableId === source.droppableId
                // destination.index === source.index
            ) {
                return state;
            }


            copyState = {
                ...state
            }

            copyState.APIsColumns[source.droppableId].APIsId = [...APIsIdSource]
            copyState.APIsColumns[destination.droppableId].APIsId = [...APIsIdDestination]
            // console.log(state.APIsColumns.UnselectedAPIs.APIsId)
            // console.log(state.APIsColumns.SelectedAPIs.APIsId)
            // console.log(copyState.APIsColumns.UnselectedAPIs.APIsId)
            // console.log(copyState.APIsColumns.SelectedAPIs.APIsId)

            // debugger
            return copyState

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
        case INPUT_API_PARAMETER_DATA_UPDATE: {
            copyState = {
                ...state,
                APIs: {...state.APIs}
            }
            let APiID = action.APiID
            let parameterAPI = action.parameterAPI
            let valueParameterAPI = action.valueParameterAPI

            copyState.APIs[APiID] = { ...state.APIs[APiID] }
            copyState.APIs[APiID].parameters[parameterAPI] = {
                ...state.APIs[APiID].parameters[parameterAPI],
                value: valueParameterAPI
            }
            debugger
            return copyState
        }
        default:
            return state
    }
}



export const updateAPIParameterInputAreaCreator = (APiID, parameterAPI, valueParameterAPI) => (
    {
        type: INPUT_API_PARAMETER_DATA_UPDATE,
        APiID: APiID,
        parameterAPI: parameterAPI,
        valueParameterAPI: valueParameterAPI
    })
// export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })



export const onTabPageClickCreator = (selectedPage) => ({ type: SELECT_PAGE, selectedPage: selectedPage })
export const onDragEndCreator = (result) => ({ type: DRAG_END_SELECTOR_API, result: result })
// export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default createOrderReducer;
