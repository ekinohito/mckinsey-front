import axios from "axios";

export const api = new axios.Axios({
    baseURL: 'api',
    responseType: 'json',
})