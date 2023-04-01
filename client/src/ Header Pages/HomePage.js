import NewMoviesSlider from "../Components/NewMoviesSlider";
import MovieContainer from "../Containers/MovieContainer";
import SubscribeForm from "../Components/SubscribeForm";
import ExtraInfo from "../Components/ExtraInfo";

const HomePage = () => {
return(
    <>
    <h3>Trending Movies</h3>
    <NewMoviesSlider />
    <hr/>
    <h3>Recently Added Movies</h3>
    <NewMoviesSlider />
    <MovieContainer />
    <SubscribeForm />
    <ExtraInfo />
    </>
)
}

export default HomePage;