
import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:3000";

const getPublicContent = (state) => {
  debugger
  return axios.get(API_URL + "/WeatherForecast",{
     headers: { 
    Authorization: 'Bearer ' + state["token"] 
   }});
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
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;