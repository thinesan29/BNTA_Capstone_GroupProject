import NewMoviesSlider from "../Components/NewMoviesSlider";
import OriginalsPage from "../Nav Bar Pages /OriginalsPage";
import TopRatedPage from "../Nav Bar Pages /TopRatedPage";
import ActionPage from "../Nav Bar Pages /ActionPage";
import ComedyPage from "../Nav Bar Pages /ComedyPage";
import DocumentariesPage from "../Nav Bar Pages /DocumentariesPage";
import HorrorPage from "../Nav Bar Pages /HorrorPage";
import MovieContainer from "../Containers/MovieContainer";
import SubscribeForm from "../Components/SubscribeForm";
import ExtraInfo from "../Components/ExtraInfo";
import Banner from "../Components/Banner";


const HomePage = () => {
return(
    <>
    <br/>
    <Banner/>
    <br/>
    <h2>Recently Added Movies</h2>
    <NewMoviesSlider />
    <br/>
    <h2>Trending Movies</h2>
    <NewMoviesSlider />
    <br/>
    <h2>Blockbuster Originals</h2>
    <OriginalsPage/>
    <br/>
    <h2>Top Rated</h2>
    <TopRatedPage/>
    <br/>
    <h2>Action</h2>
    <ActionPage/>
    <br/>
    <h2>Comedy</h2>
    <ComedyPage/>
    <br/>
    <h2>Documentaries</h2>
    <DocumentariesPage/>
    <br/>
    <h2>Horror</h2>
    <HorrorPage/>
    <br/>
    <SubscribeForm />
    <ExtraInfo />
    </>
)
}

export default HomePage;