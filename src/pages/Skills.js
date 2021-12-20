import html5Pic from "../images/html5.png";
import reactPic from "../images/react.png";
import hamlPic from "../images/haml.png";
import css3Pic from "../images/css3.png";
import bootstrapPic from "../images/bootstrap.png";
import githubPic from "../images/github.png";
import herokuPic from "../images/heroku.png";
import javascriptPic from "../images/javascript.png";
import jqueryPic from "../images/jquery.png";
import materializePic from "../images/materialize.png";
import nodejsPic from "../images/nodejs.png";
import postgresqlPic from "../images/postgresql.png";
import sassPic from "../images/sass.png";

export default function Skills() {
  return (
    <>
      <section id="skills">
        <h1 className="skills-header text-center">Skills</h1>
        <div class="container">
          <div class="card-content">
            <h4 class="blue-text">HTML</h4>
            <div class="row text-center">
              <div class="col s4 m2">
                <img alt="HTML5" title="HTML5" src={html5Pic} className="skills-img" />
                HTML5
              </div>
              <div class="col s4 m2">
                <img alt="JSX" title="JSX" src={reactPic} className="skills-img" />
                JSX
              </div>
              <div class="col s4 m2">
                <img alt="HAML" title="HAML" src={hamlPic} className="skills-img" />
                Haml
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="card-content">
            <h4 class="blue-text">CSS</h4>
            <div class="row text-center">
              <div class="col s4 m2">
                <img alt="CSS3" title="CSS3" src={css3Pic} className="skills-img" />
                CSS3
              </div>
              <div class="col s4 m2">
                <img alt="SASS" title="SASS" src={sassPic} className="skills-img" />
                SASS
              </div>
              <div class="col s4 m2">
                <img alt="Bootstrap" title="Bootstrap" src={bootstrapPic} className="skills-img" />
                Bootstrap
              </div>
              <div class="col s4 m2">
                <img alt="Materialize" title="Materialize" src={materializePic} className="skills-img" />
                Materialize
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="card-content">
            <h4 class="blue-text">JavaScript</h4>
            <div class="row text-center">
              <div class="col s4 m2">
                <img alt="React.js" title="React.js" src={reactPic} className="skills-img" />
                React
              </div>
              <div class="col s4 m2">
                <img alt="JavaScript" title="JavaScript" src={javascriptPic} className="skills-img" />
                JavaScript
              </div>
              <div class="col s4 m2">
                <img alt="jQuery" title="jQuery" src={jqueryPic} className="skills-img" />
                jQuery
              </div>
              <div class="col s4 m2">
                <img alt="Node.js" title="Node.js" src={nodejsPic} className="skills-img" />
                Node
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="card-content">
            <h4 class="blue-text">Other</h4>
            <div class="row text-center">
              <div class="col s4 m2">
                <img alt="GitHub" title="GitHub" src={githubPic} className="skills-img" />
                GitHub
              </div>
              <div class="col s4 m2">
                <img alt="Heroku" title="Heroku" src={herokuPic} className="skills-img" />
                Heroku
              </div>
              <div class="col s4 m2">
                <img alt="PostGreSQL" title="PostGreSQL" src={postgresqlPic} className="skills-img" />
                PostGreSQL
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">© Justin Dolvin 2021</footer>
    </>
  );
}
