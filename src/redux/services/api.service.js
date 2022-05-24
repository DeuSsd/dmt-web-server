import axios from "axios";
// import authHeader from "./auth-header";
const API_URL = "http://localhost:3000";


const GET_ALL_APIS_URL = '/'
const GET_ALL_APIS_PARAMETER_URL = '/apis/getResult'
const GET_RESULT = '/getResult'



const FileDownload = require('js-file-download');

// const getAllAPIs = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };


const getAllAPIs = (state) => {
  // debugger
  // return axios.get(API_URL + GET_ALL_APIS_URL, {
  //   headers: {
  //     Authorization: 'Bearer ' + state["token"]
  //   }
  // });


  return ({
    "apis": [
      {
        'title': 'Погода',
        'api': 'weather_API',
        'description': "Позволяет собрать данные по погоде в разных городах"
      },
      {
        'title': 'Ковид',
        "api": "covid_API",
        'description': "Позволяет собрать данные по ковиду в разных городах"
      }
    ]
  })


};



const getSelectedAPIsParameters = (state, selectedAPIs) => {
  // debugger
  // return axios.post(API_URL + GET_ALL_APIS_PARAMETER_URL, {
  //   headers: {
  //     Authorization: 'Bearer ' + state["token"]
  //   },
  //   data: selectedAPIs
  // });


  return ({
    "task_id": "1123123",
    "user_id": "2312421",
    "insides": [
      {
        "api":
        {
          "title": "Погода",
          "api": "weather_API",
          'description': "Позволяет собрать данные по погоде в разных городах"
        },
        "parameters": [{
          "title_parameter": "Время начала",
          "parameter": "start_time",
          "type": "date",
          'description_parameters': 'Параметр отвечающий за начало выборки'
        },
        {
          "title_parameter": "Время конца",
          "parameter": "end_time",
          "type": "date",
          'description_parameters': 'Параметр отвечающий за конец выборки'
        }
        ]
      },
      {
        "api":
        {
          "title": "Ковид",
          "api": "covid_API",
          'description': "Позволяет собрать данные по погоде в разных городах"
        },
        "parameters": [{
          "title_parameter": "Время начала",
          "parameter": "start_time",
          "type": "date",
          'description_parameters': 'Параметр отвечающий за начало выборки'
        },
        {
          "title_parameter": "Время конца",
          "parameter": "end_time",
          "type": "date",
          'description_parameters': 'Параметр отвечающий за конец выборки'
        }
        ]
      },

    ]
  })
};


const getResultFile = (state, selectedAPIsAndParameters) => {
  // debugger
  return axios.post(API_URL + "", {
    // responseType: 'blob',
    headers: {
      Authorization: 'Bearer ' + state["token"]
    },
    body: selectedAPIsAndParameters
  }).then((response) => {
    // debugger;
    FileDownload(response.data, 'report.csv')
  });
};





//   return ({
//     "task_id" : "1123123",
//     "user_id": "2312421",
//     "insides": [
//       {
//         "api": "weather_API",
//         "parameters" : [{
//             "parameter": "start_time",
//             "type": "date",
//             "value": "10/10/10"
//             },
//             {
//              "parameter": "end_time",
//             "type": "date",
//             "value": "11/11/11"
//             }]
//       },
//       {
//         "api": "covid_API",
//         "parameters" : [{
//             "parameter": "start_time",
//             "type": "date",
//             "value": "10/10/10"
//             },
//             {
//              "parameter": "end_time",
//             "type": "date",
//             "value": "11/11/11"
//             }]
//       }
//     ]
//   })
// };







const APiService = {
  getAllAPIs,
  getSelectedAPIsParameters,
  getResultFile
};

export default APiService;









/* A library that allows you to download files. */


// const FileDownload = require('js-file-download');

// const getPublicContent = (state) => {
//   debugger
//   return axios.get(API_URL + "/WeatherForecast",{
//     responseType: 'blob',
//     headers: {
//     Authorization: 'Bearer ' + state["token"]
//    }});
// };


// Axios({
//   url: 'http://localhost/downloadFile',
//   method: 'GET',
//   responseType: 'blob', // Important
// }).then((response) => {
//     FileDownload(response.data, 'report.csv');
// });

// const getResultFile = (state) => {
//   // debugger
//   return axios.post(API_URL + "/getResult",{
//     responseType: 'blob',
//     headers: {
//     Authorization: 'Bearer ' + state["token"]
//    },
//   body: {
//       "taskId": "string",
//       "userId": "string",
//       "insides": [
//         {
//           "api": "string",
//           "parameters": [
//             {
//               "parameter": "string",
//               "type": "string",
//               "value": "string"
//             }
//           ]
//         }
//       ]
//     }
//   });
// };

// ----------
// const getResultFile = (state) => {
//   // debugger
//   return axios.post(API_URL + "/getResult",{
//     // responseType: 'blob',
//     headers: {
//     Authorization: 'Bearer ' + state["token"]
//    },
//   body: {
//       "taskId": "string",
//       "userId": "string",
//       "insides": [
//         {
//           "api": "string",
//           "parameters": [
//             {
//               "parameter": "string",
//               "type": "string",
//               "value": "string"
//             }
//           ]
//         }
//       ]
//     }
//   }).then((response) => {
//     // debugger;
//     FileDownload(response.data, 'report.csv')});
// };
// -----------
// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

// const UserService = {
//   getResultFile,
//   getPublicContent,
//   getUserBoard,
//   getModeratorBoard,
//   getAdminBoard,
// };

// export default UserService;



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

  APIsOrderID: ['1'], // TODO вписать все APIsId

  APIs: {
    '1': {
      id: '1', // TODO сгенерировать порядковый id
      title: '',
      api: '',
      description: '',
      parametersOrder: ['template'], // TODO вписать все parameterы
      parameters: {
        'template': { // TODO parameter == parameter
          title_parameter: '',
          parameter: 'template',
          type: '',
          description_parameters: '',
          value: '',
          data: []
        },
      }
    },
  },

  APIsColumns: {
    UnselectedAPIs: {
      id: 'UnselectedAPIs',
      title: 'Доступные API',
      APIsId: [], //TODO загрузка Доступных API [APIsOrderID]
    },
    SelectedAPIs: {
      id: 'SelectedAPIs',
      title: 'Выбранные API',
      APIsId: [],
    }
  },

  APIsColumnsOrder: ['UnselectedAPIs', 'SelectedAPIs']
}



