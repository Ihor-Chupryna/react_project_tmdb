import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../userInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            <NavLink to='/genres'>Genres</NavLink>
            <UserInfo/>
        </div>
    );
};

export {Header};