import {axiosInstance} from "./axios.service";
import {api_key} from "../configs/urls";

export const moviesService = {
    getAll: (pageNumber) => axiosInstance.get(`/discover/movie${api_key}&page=${pageNumber}`).then(value => value.data),
    getById: (movieId) => axiosInstance.get(`/movie/${movieId}${api_key}`).then(value => value.data)
}
