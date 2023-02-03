import { Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import MovieList from '../components/movieList/movieList';
import Movie from '../pages/movieDetail/movie';

const AllRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
    )
}

export default AllRoutes;