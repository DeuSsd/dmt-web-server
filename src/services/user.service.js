
import axios from "axios";

import authHeader from "./auth-header";

const API_URL = "http://localhost:3000";

const getPublicContent = () => {
  return axios.get(API_URL + "/WeatherForecast",{ headers: { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlciIsImp0aSI6ImQ5N2UzOGY2LTlkMjEtNDk1ZC1hYzY0LTUxYTc0ZTFjNjJmOSIsImV4cCI6MTY1MjEzMTM3OCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.nq0cN7HoJ9nrL5LCgth9X4LjVkzHV3bR3-0Q9XQnxhU'  }});
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