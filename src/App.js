import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import MyList from './pages/MyList'
import Movies from './pages/Movies';
import TVShows from "./pages/TVShows"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Netflix />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tvshows" element={<TVShows />}/>
        <Route path="/mylist" element={<MyList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
