import TopRated from "../Components/TopRated";
import NewMoviesSlider from "../Components/NewMoviesSlider";

const LandingPageContainer = ({movies, deleteMovie, addToWatchList}) => {

    return (
        <div>
            <NewMoviesSlider 
            movies={movies} 
            deleteMovie={deleteMovie}
            addToWatchList={addToWatchList}/>

            <TopRated 
            movies={movies} 
            deleteMovie={deleteMovie}
            addToWatchList={addToWatchList}/>
        </div>
    )
}

export default LandingPageContainer;