import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./Copyright";
import Studio from "./Studio";
import "../css/App.css";
import PortfolioProject from "./projects/PortfolioProject";
import UnityProject from "./projects/UnityProject";
import BattleshipProject from "./projects/BattleshipProject";
import WeatherProject from "./projects/WeatherProject";
import WebGraveyardProject from "./projects/WebGraveyardProject";


export default function App() {
  return (
    <div className = "app">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/studio" element={<Studio/>} />
        <Route path="/projects/portfolio" element={<PortfolioProject/>}/>
        <Route path="/projects/unity" element={<UnityProject/>}/>
        <Route path="/projects/battleship" element={<BattleshipProject/>}/>
        <Route path="/projects/weather" element={<WeatherProject/>}/>
        <Route path="/projects/webgraveyard" element={<WebGraveyardProject/>}/>

      </Routes>
      <Copyright/>
    </Router>
    </div>
  );
}