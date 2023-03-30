import logo from './logo.svg';
// import './App.css';
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
// import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ExtraInfo from './Components/ExtraInfo';
import Movie from './Components/Movie';
import MovieForm from './Components/MovieForm';
import MovieList from './Components/MovieList';

function App() {
  const SERVER_URL = "http://localhost:8080";

  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);
  const [cart, setCart] = useState([]);

  const loadMovieData = async () => {
    const response = await fetch(`${SERVER_URL}/movies`);
    const data = await response.json();
    setMovies(data);
  };

  const loadCastData = async () => {
    const response = await fetch(`${SERVER_URL}/casts`);
    const data = await response.json();
    setCasts(data);
  };

  useEffect(() => {
    loadMovieData();
    loadCastData();
  }, []);


  // Post Product
  const postMovie = async (addedMovie) => {
    const movieBody = {
      title: addedMovie.title,
      genre: addedMovie.genre,
      duration: addedMovie.duration,
      language: addedMovie.language,
      review: addedMovie.review,
      rating:addedMovie.rating,
    };

    const id = casts.filter((cast) => {
      return cast.name === addedMovie.cast;
    })[0].castId;

    const response = await fetch(`${SERVER_URL}/casts/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieBody),
    });
    const savedMovie = await response.json();
    savedMovie.castId = id;
    savedMovie.castName = addedMovie.cast;
    savedMovie.movieId = savedMovie.id;
    setMovies([...movies, savedMovie]);
  };


  // Delete Product
  const deleteMovie = async (id) => {
    await fetch(`${SERVER_URL}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    loadMovieData();
  };


  // // add to cart
  // const addToCart = (product) => {
  //   const item = {
  //     id: product.productId,
  //     name: product.name,
  //     price: product.price,
  //     quantity: 1,
  //   };
  //   setCart([...cart, item]);
  // };



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
}

export default App;
