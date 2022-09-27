export default function About() {
  return (
    <div>
      <div className = "main-body">
        {/* <div className = "about-header">
          <h1>ABOUT</h1>
          <p>This is my personal webpage</p>
        </div> */}
        <div className = "bio about-section">
          <img className = "profile-pic" src="/images/profile.jpg" alt="Picture of Seulchan Han" />
          <div className="bio-title title">About</div>
          <div className="bio-info info">Hello, I&apos;m Seulchan. I&apos;m a sophomore studying Computer Engineering and Applied Computational Math at the <a href="https://www.washington.edu/">University of Washington</a>.
          <br></br><br></br>
          I currently work as an academic tutor at the Center for Learning and Undergraduate Enrichment (<a href="https://academicsupport.uw.edu/clue/">CLUE</a>), specializing in computer science and
          physics.
          I love learning about, applying, and teaching computer science and the mathematics behind it!
          </div>
        </div>
        <div className = "contact about-section">
          <div className="contact-title title">Contact</div>
          <div className="contact-info info">Contact me at <a href="mailto:paulh27@uw.edu">paulh27@uw.edu</a>
          <br></br>
          Here is my <a href="https://www.linkedin.com/in/paul-han-082ab420b/">Linkedin profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}