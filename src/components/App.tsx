import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./Copyright";
import Projects from "./Projects";
import PortfolioPage from "./projects/PortfolioPage";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/portfolio" element={<PortfolioPage/>}/>
      </Routes>
      <Copyright/>
    </Router>
  );
}