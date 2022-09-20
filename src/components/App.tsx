import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./Copyright";
import Studio from "./Studio";
import "../css/App.css";
import PortfolioProject from "./projects/PortfolioProject";


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
      </Routes>
      <Copyright/>
    </Router>
    </div>
  );
}