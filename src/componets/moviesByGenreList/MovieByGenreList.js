import css from '../../style/Card.module.css';

const MovieByGenreList = ({movieByGenre}) => {
    const {poster_path, title} = movieByGenre

    return (
        <div className={css.card}>
            <img src={'https://image.tmdb.org/t/p/w200' + poster_path} alt=""/>
            <h3>{title}</h3>
        </div>
    );
};

export {MovieByGenreList};