import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './ Header Pages/VideoPage';
import HomePage from './ Header Pages/HomePage';
import MoviePage from './ Header Pages/MoviePage';
import CastPage from './ Header Pages/CastPage';
import LoginPage from './ Header Pages/LoginPage';
import AdminForm from './Components/AdminForm';
import AdminPage from './ Header Pages/AdminPage';
import SubscribePage from './ Header Pages/SubscribePage';
import OriginalsPage from './Nav Bar Pages /OriginalsPage';
import TopRatedPage from './Nav Bar Pages /TopRatedPage';
import ActionPage from './Nav Bar Pages /ActionPage';
import ComedyPage from './Nav Bar Pages /ComedyPage';
import DocumetariesPage from './Nav Bar Pages /DocumentariesPage';
import HorrorPage from './Nav Bar Pages /HorrorPage';
import NavBar from './Components/NavBar';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <NavBar/>
    <br/>
    <Routes>
      <Route path="/" element={<VideoPage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/Admin" element={<AdminForm/>}/>
      <Route path="/Admin/Manage" element={<AdminPage/>}/>
      <Route path="/Admin/Manage/Movie" element={<MoviePage/>}/>
      <Route path="/Admin/Manage/Cast" element={<CastPage/>}/>
      <Route path="/Subscribe" element={<SubscribePage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="/Blockbuster_Originals" element={<OriginalsPage/>}/>
      <Route path="/Top_Rated" element={<TopRatedPage/>}/>
      <Route path="/Action" element={<ActionPage/>}/>
      <Route path="/Comedy" element={<ComedyPage/>}/>
      <Route path="/Documentaries" element={<DocumetariesPage/>}/>
      <Route path="/Horror" element={<HorrorPage/>}/>

    </Routes>
    <br/>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );

 };
export default App;
