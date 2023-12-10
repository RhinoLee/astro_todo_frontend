import axios from "axios";

const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;

let BASE_URL = "";
if (isDev) BASE_URL = import.meta.env.PUBLIC_BACKEND_API;
else if (isProd) BASE_URL = import.meta.env.DB_BACKEND_API;

const $axios = axios.create({
  baseURL: BASE_URL,
});

export default $axios;
