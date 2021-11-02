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

      <div className="about-content" align="right">
        <h1 className="about-header">About Me</h1>
        <p className="about-paragraph">
          Hello, I see you would like to know more about me. At least, that's a
          safe assumption, given that you've clicked the "about me" section on
          my portfolio website.
        </p>
        <p className="about-paragraph">
          I have had a keen interest in technology from a very young age; I was
          given my first computer at the age of 11 and I was immediately
          enthralled with the possibilities it provided. I did not have access
          to the internet at the time, but I borrowed plenty of books from the
          library and was seeing what kind of webpages I could create all on my
          own.
        </p>
        <p className="about-paragraph">
          I soon 'graduated' to learning some scripting, such as creating .bat
          files to automate tasks on the computer using the command line, and I
          learned some basic python and learned how to manipulate data; in doing
          so, I learned a lot about how to 'think like a computer', and as I
          grew up I was constantly finding ways to automate tasks and save time
          while writing papers for school, or, creating visualizations of data
          that I wanted to conceptualize.
        </p>
        <p className="about-paragraph">
          I carried this interest through my life, but programming was nothing
          more than a hobby or side interest, I never really considered making
          it into a career. It seemed like a daunting task to break into the
          programming sector, and I never felt like I was talented enough.
        </p>
        <p className="about-paragraph">
          However, I realized that if anyone had the capability to do it, I
          definitely had the skills it took to make it as a developer. I don't
          have very much formal experience, but I have been learning on my own
          for several years, and I am finally ready to take the plunge and do
          something I am passionate about.
        </p>
        <footer id="footer">© Justin Dolvin 2021</footer>
      </div>
    </>
  );
}
