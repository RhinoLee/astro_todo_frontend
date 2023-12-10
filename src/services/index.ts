import axios from "axios";

const BASE_URL = `${import.meta.env.PUBLIC_BACKEND_API}/api`;
const $axios = axios.create({
  baseURL: BASE_URL,
});

export default $axios;
