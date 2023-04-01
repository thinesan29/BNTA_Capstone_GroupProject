import MovieContainer from "../Containers/MovieContainer";
import { Link } from "react-router-dom";
const MoviePage = () => {

    return(
        <>
        <h1>Movie Database</h1>
        <Link to="/Admin">
        <button>Back to Admin Page</button>
        </Link>
        <MovieContainer/>
        </>
    )
}

export default MoviePage;