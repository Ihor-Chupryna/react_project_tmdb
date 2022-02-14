import {Link} from "react-router-dom";

import css from '../../style/Card.module.css';

const MovieList = ({movie}) => {
    const {original_title, vote_average, poster_path, id} = movie

    return (
        <div className={css.card}>
            <Link to={`${id.toString()}`} state={movie}><img src={'https://image.tmdb.org/t/p/w200' + poster_path}
                                                             alt="poster movie"/></Link>
            <h3>{original_title}</h3>
            <p>Rating <span>{vote_average}</span></p>
        </div>
    );
};

export {MovieList};