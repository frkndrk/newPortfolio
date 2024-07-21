import "./intro.scss"
import { useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Intro = () => {

  

  

  return (
    <div className="intro">
        <div className="cont">
          <div className="cont1">
            <div className="title">
              <h1>Front-End React Developer</h1>
              <p>Hi, I'm Furkan Durak. A passionate Front-end React Developer based in Ankara, Türkiye.</p>
              <ul className="icons1">
                <li><a href="https://www.linkedin.com/in/frkndrk/" target="_blank"><LinkedInIcon fontSize="large"/></a></li>
                <li><a href="https://github.com/frkndrk" target="_blank"><GitHubIcon fontSize="large"/></a></li>
              </ul>
            </div>
            <div className="profilePic">
              <div className="picCont">
                <div className="sunGlasses"></div>
                <div className="king"></div>
              </div>
            </div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <ul className="icons">
              <li className="icon"><img src="../../src/assets/HTML.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/CSS.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/JavaScript.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/React-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/ThreeJs-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Vite-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Sass.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Git.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/JQuery.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Bootstrap.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/Laravel-Light.svg" alt="" /></li>
              <li className="icon"><img src="../../src/assets/MaterialUI-Light.svg" alt="" /></li>
            </ul>
          </div>
        </div>
        <canvas id="Matrix"></canvas>
    </div>
  )
}

export default Intro