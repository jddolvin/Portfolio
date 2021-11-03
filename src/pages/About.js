import profilePic from "../images/profile.jpg";

export default function About() {
  return (
    <>
      <div id="container">
        <div className="profile-pic">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Justin Dolvin by Savannah River"
          />
        </div>
        <div className="profile-pic-description">
          Justin Dolvin <br />
          Full-Stack Web Developer Based in Cleveland, Ohio
        </div>
      </div>

      <div className="about-content text-center">
        <h1 className="about-header">About Me</h1>
        <h2 className="about-subheader">
          Mission-driven full stack developer with a passion for thoughtful UI
          design, robust back-end implementation, and collaboration.
        </h2>
        <br />
        <p className="about-paragraph">
          I've always sought out opportunities that are meaningful to me, and
          taken on challenges that push me to learn more. Although my
          professional path has taken many twists and turns - from retail
          management, to production supervisor, to construction worker - I've
          never stopped engaging my passion to help others and solve problems.
        </p>
        <p className="about-paragraph">
          As a web developer, I take advantage of my obsessive attention to
          detail and my mission-driven work ethic to change the world. That's
          why I'm excited to make a big impact at a high growth company.
        </p>
      </div>
      <footer id="footer">© Justin Dolvin 2021</footer>
    </>
  );
}
