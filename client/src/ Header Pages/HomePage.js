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
    <Banner/>
    <h3>Trending Movies</h3>
    <NewMoviesSlider />
    <h3>Recently Added Movies</h3>
    <NewMoviesSlider />
    <OriginalsPage/>
    <TopRatedPage/>
    <ActionPage/>
    <ComedyPage/>
    <DocumentariesPage/>
    <HorrorPage/>
    <SubscribeForm />
    <ExtraInfo />
    </>
)
}

export default HomePage;