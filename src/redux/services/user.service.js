
import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:3000";



const FileDownload = require('js-file-download');

const getPublicContent = (state) => {
  debugger
  return axios.get(API_URL + "/WeatherForecast",{
    responseType: 'blob',
    headers: { 
    Authorization: 'Bearer ' + state["token"] 
   }});
};


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


const getResultFile = (state) => {
  // debugger
  return axios.post(API_URL + "/getResult",{
    // responseType: 'blob',
    headers: { 
    Authorization: 'Bearer ' + state["token"] 
   },
  body: {
      "taskId": "string",
      "userId": "string",
      "insides": [
        {
          "api": "string",
          "parameters": [
            {
              "parameter": "string",
              "type": "string",
              "value": "string"
            }
          ]
        }
      ]
    }
  }).then((response) => {
    // debugger;
    FileDownload(response.data, 'report.csv')});
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getResultFile,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;