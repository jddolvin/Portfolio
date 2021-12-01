import gitHubPic from "../images/github.png";
import linkedInPic from "../images/linkedin.png";
import emailPic from "../images/email.png";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <h1 className="contact-header text-center">
          Contact Me: <br />
        </h1>
        <div class="container">
          <div class="card-content">
            <div class="row text-center">
              <div class="col s4 m2">
                <a href="https://github.com/jddolvin">
                  <img alt="" src={gitHubPic} className="skills-img" />
                </a>
                Check out my GitHub repositories!
              </div>
              <div class="col s4 m2">
                <a href="https://www.linkedin.com/in/justin-dolvin/">
                <img alt="" src={linkedInPic} className="skills-img" />
                </a>
                Connect with me on LinkedIn!
              </div>
              <div class="col s4 m2">
                <a href="mailto: justindolvin@gmail.com">
                  <img alt="" src={emailPic} className="skills-img" />
                </a>
                Feel free to reach out via e-mail!
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">© Justin Dolvin 2021</footer>
    </>
  );
}
