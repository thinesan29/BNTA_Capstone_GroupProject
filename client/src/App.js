import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
// import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ExtraInfo from './Components/ExtraInfo';
import Movie from './Components/Movie';
import MovieForm from './Components/MovieForm';
import MovieList from './Components/MovieList';

function App() {
  return (
    <>
    <Header />
    <NavBar/>
    {/* <Banner /> */}
    <ExtraInfo/>
    <Movie/>
    <MovieList/>
    <MovieForm/>




    <Footer />
    </>
  );
}

export default App;
