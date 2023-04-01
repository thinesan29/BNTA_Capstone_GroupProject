import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './ Header Pages/HomePage';
import MoviePage from './ Header Pages/MoviePage';
import CastPage from './ Header Pages/CastPage';
import SubscribePage from './ Header Pages/SubscribePage';
import OriginalsPage from './Nav Bar Pages /OriginalsPage';
import TopRatedPage from './Nav Bar Pages /TopRatedPage';
import ActionPage from './Nav Bar Pages /ActionPage';
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
      <Route path="/Blockbuster_Originals" element={<OriginalsPage/>}/>
      <Route path="/Top_Rated" element={<TopRatedPage/>}/>
      <Route path="/Action" element={<ActionPage/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
  );

 };
export default App;
