import MovieContainer from "../Containers/MovieContainer";
import { Link } from "react-router-dom";
const MoviePage = () => {

    return(
        <>
        <h1>Movie Database</h1>
        <Link to="/Admin/Manage">
        <button>Go Back</button>
        </Link>
        <MovieContainer/>
        </>
    )
}

export default MoviePage;