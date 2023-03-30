import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
// import Banner from './Components/Banner';
import Footer from './Components/Footer';
import ExtraInfo from './Components/ExtraInfo';
import MovieForm from './Components/MovieForm';

function App() {

  return (
    <>
    <Header />
    <NavBar/>
    <ExtraInfo/>
    <MovieForm/>
    <Footer />
    </>
  );

 };
export default App;
