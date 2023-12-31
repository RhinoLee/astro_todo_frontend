import axios from "axios";

const BASE_URL =
  import.meta.env.DB_BACKEND_API || import.meta.env.PUBLIC_BACKEND_API;

const $axios = axios.create({
  baseURL: BASE_URL,
});

export default $axios;
