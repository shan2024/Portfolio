import ProjectLink from "./projects/ProjectLink";
import "../css/Studio.css";

export default function Studio() {
  return (
    <div className="studio">
      <div className = "projects studio-section">
        <div className="project-title title">Projects</div>
        <ProjectLink title = "Feline Frenzy" link="/projects/unity" date = "April 2022"></ProjectLink>
        <ProjectLink title = "Portfolio redesign" link="/projects/portfolio" date = "December 2021"></ProjectLink>
        <ProjectLink title = "Battleship" link="/projects/battleship" date = "September 2021"></ProjectLink>
        <ProjectLink title = "Weather app" link="/projects/weather" date = "October 2021"></ProjectLink>
        <ProjectLink title = "Website graveyard" link="/projects/webgraveyard" date = "August 2021"></ProjectLink>

      </div>
      <div className = "other studio-section">
        <div className="other-title title">Other</div>
        <div className="other-info info">
          Github: <a href="https://github.com/shan2024">https://github.com/shan2024</a>
          <br></br>
          Resume: <a href="/images/SHresume.pdf" download>download link</a>
        </div>
      </div>
    </div>
  );
}
