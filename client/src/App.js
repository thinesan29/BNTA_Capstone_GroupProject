import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import CastPage from './Pages/CastPage';
import SubscribePage from './Pages/SubscribePage';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/Movie" element={<MoviePage/>}/>
      <Route path="/Cast" element={<CastPage/>}/>
      <Route path="/Subscribe" element={<SubscribePage/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
  );

 };
export default App;
