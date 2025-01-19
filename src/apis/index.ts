import axios from "axios";
import { authSlice, clearAuth } from "../store/slices/authSlice";
import { reduxStore } from "../store";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


apiInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.status === 401) {
        reduxStore.dispatch(authSlice.actions.clearAuth({}));
    }
    return Promise.reject(error);
});


export { apiInstance }
