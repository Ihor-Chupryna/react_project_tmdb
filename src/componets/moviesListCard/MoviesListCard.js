import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './MovieListCard.module.css'
import {getMovieById} from "../../store/movies.slice";

const MoviesListCard = () => {
    const {movie, error} = useSelector(state => state.movies)
    const {state} = useLocation();
    const id = state.id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById({movieId: id}))
    }, [id])

    return (
        <div className={css.wrapper}>
            <Link to={'/movies'}>
                <button>Back</button>
            </Link>
            {movie && <div>
                <div className={css.flex}><img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt=""/>
                    <div><h1>{movie.original_title}</h1>
                        <h2>Tagline: {movie.tagline}</h2>
                        <h3>Runtime: {movie.runtime} min.</h3>
                        <h4>Popularity: {movie.popularity}</h4>
                        <h2>Release date: {movie.release_date}</h2>
                    </div>
                </div>
                <h2>budget: {movie.budget}</h2>
                <p> - {movie.overview}</p>
                <div className={css.flex}>{movie.genres.map(genre => <div className={css.genre}
                                                                          key={genre.id}>{genre.name}</div>)}</div>
                <div><span>Production companies:</span>{movie.production_companies.map(company => <div
                    className={css.company} key={company.id}>
                    {company.name}
                </div>)}</div>
            </div>}
            {error && <h2>{error}</h2>}
        </div>
    );
};

export {MoviesListCard};