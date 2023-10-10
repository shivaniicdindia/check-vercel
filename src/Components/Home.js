import { React } from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

function Home() {
  return (
    <div className="home" id="home">
      <p className="gif" align="center">
       
      </p>
      <div className="home-data">
        <h1 className="home-title">
          Hey!,
          <img
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            alt=""
            width="50px"
          ></img>
          <br />
          I'am <span>Shivani</span>
          <br />
          Full Stack Developer
        </h1>
        <div className="home-img">
          <img src="" alt=""></img>
        </div>
      </div>

      <div className="home-social">
        <a
          href="/"
          className="home-social-icon"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
         href="/"
          className="home-social-icon"
        >
          <TwitterIcon className="icon" />
        </a>
        <a   href="/" className="home-social-icon">
          <GitHubIcon className="icon" />
        </a>
        <a href="#home" className="home-social-icon">
          <TelegramIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
