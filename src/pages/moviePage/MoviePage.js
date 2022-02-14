import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, setCurrentPage} from "../../store/movies.slice";
import {MovieList, Pagination} from "../../componets";
import css from '../../style/List.module.css'

const MoviePage = () => {
    let {movies, currentPage, error, totalPage} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies({curPage: currentPage}))
    }, [currentPage])

    const setPage = (value) => {
        dispatch(setCurrentPage(value))
    }

    return (
        <>
            {movies &&
                <div className={css.list}>{movies.map(movie => <MovieList key={movie.id} movie={movie}/>)}</div>}
            <Pagination totalPage={totalPage} currentPage={currentPage} setPage={setPage}/>
            {error && <h1 className={css.error}>{error}</h1>}
        </>
    );
};

export {MoviePage};