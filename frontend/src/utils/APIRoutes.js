import axios from "axios";

export const axiosInstance = axios.create({
  host: "https://backend-of-tasks-app.onrender.com/api/",
});
