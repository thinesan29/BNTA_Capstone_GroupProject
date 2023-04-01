import NavBar from "../Components/NavBar";
// import NewMoviesSlider from "../Components/NewMoviesSlider";
import TopRated from "../Components/TopRated";
import MovieContainer from "../Containers/MovieContainer";
import SubscribeForm from "../Components/SubscribeForm";
import ExtraInfo from "../Components/ExtraInfo";

const HomePage = () => {
return(
    <>
    {/* <NewMoviesSlider /> */}
    {/* <TopRated /> */}
    <MovieContainer />
    <SubscribeForm />
    <ExtraInfo />
    </>
)
}

export default HomePage;