import {api_key} from "../configs/urls";
import {axiosInstance} from "./axios.service";

export const genresService = {
    getAll: () => axiosInstance.get(`/genre/movie/list${api_key}`).then(value => value.data),
    filmsByGenre: (genreId, pageNumber) => axiosInstance.get(`/discover/movie${api_key}&with_genres=${genreId}&page=${pageNumber}`).then(value => value.data)
}