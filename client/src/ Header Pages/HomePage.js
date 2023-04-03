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
    <div className="homepage">
    <Banner/>
    <br/>
    <h2>Recently Added Movies</h2>
    <NewMoviesSlider />
    <br/>
    <h2>Trending Movies</h2>
    <NewMoviesSlider />
    <br/>
    <OriginalsPage/>
    <br/>
    <TopRatedPage/>
    <br/>
    <ActionPage/>
    <br/>
    <ComedyPage/>
    <br/>
    <DocumentariesPage/>
    <br/>
    <HorrorPage/>
    <br/>
    <SubscribeForm />
    <ExtraInfo />
    </div>
)
}

export default HomePage;