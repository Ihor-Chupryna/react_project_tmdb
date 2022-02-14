import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './SelectGenre.module.css';
import {getAllGenres, setGenreId} from "../../store/genres.slice";

const SelectGenre = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    const formHandler = (ev) => {
        dispatch(setGenreId(+ev.target.value))
    }

    return (
        <div className={css.select}>
            <form>
                <label><select name={'genreId'} onChange={formHandler}>
                    {genres?.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>
                </label>
            </form>
        </div>
    );
};

export {SelectGenre};