import {Routes, Route} from "react-router-dom";

import {Layout, MoviesListCard} from "./componets";
import HomePage from "./pages/homePage/homePage";
import {GenresPage, MoviePage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviePage/>}/>
                    <Route path={'movies/:id'} element={<MoviesListCard/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
