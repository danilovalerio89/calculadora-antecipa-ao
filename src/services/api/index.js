import axios from "axios";

const BASE_URL = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";

export const apiAXIOS = axios.create({
  baseURL: BASE_URL,
});
