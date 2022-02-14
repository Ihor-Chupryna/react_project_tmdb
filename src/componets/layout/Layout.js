import {Outlet} from 'react-router-dom';

import {Header} from "../header/Header";

const Layout = () => {
    return (
        <div style={{margin: '0', padding: '0'}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};