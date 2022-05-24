// import store from "./reduxState"
import APiService from "./services/api.service"

const DRAG_END_SELECTOR_API = 'DRAG_END_SELECTOR_API'
const SELECT_PAGE = 'SELECT_PAGE'
const INPUT_API_PARAMETER_DATA_UPDATE = 'INPUT_API_PARAMETER_DATA_UPDATE'

const LOAD_ALL_APIS = 'LOAD_ALL_APIS'
const LOAD_ALL_APIS_PARAMETERS = 'LOAD_ALL_APIS_PARAMETERS'
const LOAD_RESULT_FILE= 'LOAD_RESULT_FILE'


const CHOICE_TAB = 'Выбор'
const CONFIGURATION_TAB = 'Конфигурирование'
const PREVIEW_TAB = 'Предпросмотр'
const OPDER_TAB = 'Заказ'



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

    // APIsOrderID: ['1'], // TODO вписать все APIsId

    // APIs: {
    //     '1': {
    //         id: '1', // TODO сгенерировать порядковый id
    //         title: '',
    //         api: '',
    //         description: '',
    //         parametersOrder: ['template'], // TODO вписать все parameterы
    //         parameters: {
    //             'template': { // TODO parameter == parameter
    //                 title_parameter: '',
    //                 parameter: 'template',
    //                 type: '',
    //                 description_parameters: '',
    //                 value: '',
    //                 data: []
    //             },
    //         }
    //     },
    // },


    APIsOrderID: ['1', '2', '3', '4'],

    APIs: {
        '1': {
            id: '1',
            title: 'Погода',
            api: 'weatherAPI',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'locale', 'locales', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locales': {
                    title_parameter: "Время начала",
                    parameter: "locales",
                    type: "text",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locale': {
                    title_parameter: "Время начала",
                    parameter: "locale",
                    type: "selectOne",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: 'Калининград',
                    data: ['Калининград', 'Санкт-Петербург', 'Москва', 'Харовск']
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: '2022-05-04'
                },
            }
        },
        '2': {
            id: '2',
            title: 'Погода',
            api: 'COVID_API',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'locale', 'locales', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locales': {
                    title_parameter: "Время начала",
                    parameter: "locales",
                    type: "text",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locale': {
                    title_parameter: "Время начала",
                    parameter: "locale",
                    type: "selectOne",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: 'Калининград',
                    data: ['Калининград', 'Санкт-Петербург', 'Москва', 'Харовск']
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: '2022-05-04'
                },
            }
        },
        '3': {
            id: '3',
            title: 'Погода',
            api: 'COVID_API_2',
            description: "Позволяет собрать данные по погоде в разных городах",
            parametersOrder: [
                'start_time', 'locale', 'locales', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locales': {
                    title_parameter: "Время начала",
                    parameter: "locales",
                    type: "text",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locale': {
                    title_parameter: "Время начала",
                    parameter: "locale",
                    type: "selectOne",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: 'Калининград',
                    data: ['Калининград', 'Санкт-Петербург', 'Москва', 'Харовск']
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: '2022-05-04'
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
                'start_time', 'locale', 'locales', 'end_time'
            ],
            parameters: {
                'start_time': {
                    title_parameter: "Время начала",
                    parameter: "start_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locales': {
                    title_parameter: "Время начала",
                    parameter: "locales",
                    type: "text",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: '2022-05-04'
                },
                'locale': {
                    title_parameter: "Время начала",
                    parameter: "locale",
                    type: "selectOne",
                    description_parameters: 'Параметр отвечающий за начало выборки',
                    value: 'Калининград',
                    data: ['Калининград', 'Санкт-Петербург', 'Москва', 'Харовск']
                },
                'end_time': {
                    title_parameter: "Время конца",
                    parameter: "end_time",
                    type: "date",
                    description_parameters: 'Параметр отвечающий за конец выборки',
                    value: '2022-05-04'
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

    let resultHTTPRequest

    switch (action.type) {
        case LOAD_ALL_APIS:
            resultHTTPRequest = APiService.getAllAPIs(({ token: action.getToken() }))
            // debugger
            copyState = serializerGetAllAPIs(state, resultHTTPRequest)
            resultHTTPRequest = {}
            // debugger
            return copyState
        case LOAD_ALL_APIS_PARAMETERS:
            resultHTTPRequest = APiService.getSelectedAPIsParameters(
                { token: action.getToken() },
                { "APIs": ["weather_API", "covid_API"] }
            )
            // debugger
            copyState = serializerGetSelectedAPIsParameters(state, resultHTTPRequest)
            resultHTTPRequest = {}
            // copyState = {
            //     ...state,
            //     APIs: { ...state.APIs }
            // }
            // let APiID = action.APiID
            // let parameterAPI = action.parameterAPI
            // let valueParameterAPI = action.valueParameterAPI
            // debugger
            // copyState.APIs[APiID] = { ...state.APIs[APiID] }
            // copyState.APIs[APiID].parameters[parameterAPI] = {
            //     ...state.APIs[APiID].parameters[parameterAPI],
            //     // value: 'valueParameterAPI'
            //     value: valueParameterAPI
            // }


            debugger
            return copyState

        case LOAD_RESULT_FILE:
            let selectedAPIsAndParameters = {}
            resultHTTPRequest = APiService.getResultFile(
                { token: action.getToken() },
                selectedAPIsAndParameters
            )
            // debugger
            // copyState = serializerGetSelectedAPIsParameters(state, resultHTTPRequest)
            resultHTTPRequest = {}
            // copyState = {
            //     ...state,
            //     APIs: { ...state.APIs }
            // }
            // let APiID = action.APiID
            // let parameterAPI = action.parameterAPI
            // let valueParameterAPI = action.valueParameterAPI
            // debugger
            // copyState.APIs[APiID] = { ...state.APIs[APiID] }
            // copyState.APIs[APiID].parameters[parameterAPI] = {
            //     ...state.APIs[APiID].parameters[parameterAPI],
            //     // value: 'valueParameterAPI'
            //     value: valueParameterAPI
            // }


            debugger
            return state

        case SELECT_PAGE:
            // // let ss = store.getState()
            // debugger
            // let sss = action.getToken()
            // debugger
            debugger

            // switch (action.selectedPage) {
            //     case CHOICE_TAB:
            //         // const CHOICE_TAB = 'Выбор'
            //         // const CONFIGURATION_TAB = 'Конфигурирование'
            //         // const PREVIEW_TAB = 'Предпросмотр'
            //         // const OPDER_TAB = 'Заказ'


            //         let result = APiService.getAllAPIs(({ token: action.getToken() }))
            //         debugger
            //         copyState = serializerGetAllAPIs(state, result)
            //         debugger
            //         break
            //     default:
            //         copyState = state
            // }
            return {
                ...state,  //TODO исправить на нормальное: копирование переопределение  ...state
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
                APIs: { ...state.APIs }
            }
            let APiID = action.APiID
            let parameterAPI = action.parameterAPI
            let valueParameterAPI = action.valueParameterAPI
            debugger
            copyState.APIs[APiID] = { ...state.APIs[APiID] }
            copyState.APIs[APiID].parameters[parameterAPI] = {
                ...state.APIs[APiID].parameters[parameterAPI],
                // value: 'valueParameterAPI'
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

export const getAllAPIsCreator = () => ({ type: LOAD_ALL_APIS })
export const getSelectedAPIsParametersCreator = () => ({ type: LOAD_ALL_APIS_PARAMETERS})
export const getResultFileCreator = () => ({ type: LOAD_RESULT_FILE})



export const onDragEndCreator = (result) => ({ type: DRAG_END_SELECTOR_API, result: result })
// export const updatePasswordTextAreaCreator = (body) => ({ type: INPUT_PASSWORD_TEXT_UPDATE, body: body })


export default createOrderReducer;







let serializerGetAllAPIs = (state, requestData) => {
    let APIsOrderID = []
    let APIs = {}
    let counter = 0
    requestData['apis'].map((APi) => {
        let id = (++counter) + ''
        APIsOrderID.push(id);
        APIs[id] = {
            ...APi,
            id: id
        }
        return true
    })

    // debugger
    let copyState = {
        ...state,
        APIs: APIs,
        APIsOrderID: APIsOrderID,
        APIsColumns: {
            ...state.APIsColumns,
            UnselectedAPIs: {
                ...state.APIsColumns.UnselectedAPIs,
                APIsId: [...APIsOrderID]
            },
            SelectedAPIs: {
                ...state.APIsColumns.SelectedAPIs,
                APIsId: []
            },
        }
    }
    // debugger
    return copyState
}

let serializerGetSelectedAPIsParameters = (state, requestData) => {
    let APIsOrderID = []
    let parametersOrder = []
    let APIsState = {}
    let parametersState = {}
    let counter = 0
    
    requestData['insides'].map((APi) => {
        let id = (++counter) + '';
        APIsOrderID.push(id);
        // debugger
        APi['parameters'].map((parameter) => {
            parametersOrder.push(parameter.parameter)
            parametersState[parameter.parameter]={
                // ...parameter, //TODO убедиться что они равны
                title_parameter: parameter.title_parameter,
                parameter: parameter.parameter,
                type: parameter.type,
                description_parameters: parameter.description_parameters,
                value: '',
                data: parameter.data 
            }
            return true
        })

        APIsState[id] = {
            ...APi['api'], //TODO посмотреть содержимое
            id: id,
            parameters: {...parametersState},
            parametersOrder:[...parametersOrder]
        }
        parametersState = {}
        parametersOrder = []
        return true
    })

    // debugger
    let copyState = {
        ...state,
        APIs: APIsState,
        APIsOrderID: APIsOrderID,
    }
    // debugger
    return copyState
}
