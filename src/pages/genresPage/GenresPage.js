import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getMoviesByGenre, setCurrentPage} from "../../store/genres.slice";
import {MovieByGenreList, Pagination, SelectGenre} from "../../componets";
import css from '../../style/List.module.css';

const GenresPage = () => {
    let {moviesByGenres, id, currentPage, totalPage, error} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesByGenre({genreId: id, pageNumber: currentPage}))
    }, [id, currentPage])

    const setPage = (value) => {
        dispatch(setCurrentPage(value))
    }

    return (
        <>
            <SelectGenre/>
            {moviesByGenres &&
                <div className={css.list}>{moviesByGenres.map(movieByGenre => <MovieByGenreList key={movieByGenre.id}
                                                                                                movieByGenre={movieByGenre}/>)}</div>
            }
            <Pagination currentPage={currentPage} totalPage={totalPage} setPage={setPage}/>
            {error && <h1 className={css.error}>{error}</h1>}
        </>
    );

};

export {GenresPage};