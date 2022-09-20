import {  Link } from "react-router-dom";

export default function PortfolioProject() {
  return (
    <Link to="/projects/portfolio" className = "portfolio-project-link">
      <img className="portfolio-image" src="http://localhost:4332/images/projects/portfolio.png" alt="Portfolio picture"></img>
      <div className="overlay">
        <p className ="title">Portfolio Design</p>
        <p className="subtitle">React and Express Development</p>
      </div>
    </Link>
  );
}

