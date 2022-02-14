import axios from 'axios';

import baseURL from "../configs/urls";

export const axiosInstance = axios.create({baseURL});
