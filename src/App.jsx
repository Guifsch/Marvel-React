import { Link } from "react-router-dom";
import "./App.css";

import image1 from "./assets/image1.png";
import image1colorized from "./assets/image1colorized.png";
import image2 from "./assets/image2.png";
import image2colorized from "./assets/image2colorized.png";
import image3 from "./assets/image3.png";
import image3responsive from "./assets/image3responsive.png";
import image3responsiveColorized from "./assets/image3responsive.png";
import image3colorized from "./assets/image3colorized.png";
import image4 from "./assets/image4.png";
import image4colorized from "./assets/image4colorized.png";
import image5 from "./assets/image5.png";
import image5colorized from "./assets/image5colorized.png";
import image6 from "./assets/image6.png";
import image6colorized from "./assets/image6colorized.png";
import image6responsive from "./assets/image6responsive.png";
import image6responsiveColorized from "./assets/image6responsive.png";

export default function App() {
  return (
    <div className="App">
      <div className="index">
        <div className="firstLine">
          <Link to="/characters" className="characters centerContent relative">
            <img className="imageHome" src={image1} alt="" />
            <img className="imageHome" src={image1colorized} alt="" />
            <span className="title">CHARACTERS</span>
          </Link>
          <Link to="/comics" className="comics centerContent relative">
            <img className="imageHome" src={image2} alt="" />
            <img className="imageHome" src={image2colorized} alt="" />
            <span className="title">COMICS</span>
          </Link>
        </div>
        <div className="secondLine">
          <Link to="/creators" className="creators centerContent relative">
            <img className="imageHome" src={image3} alt="" />
            <img className="imageHome" src={image3colorized} alt="" />
            <span className="title">CREATORS</span>
          </Link>
          <Link
            to="/creators"
            className="creatorsResponsive centerContent relative"
          >
            <img className="imageHome" src={image3responsive} alt="" />
            <img className="imageHome" src={image3responsiveColorized} alt="" />
            <span className="title">CREATORS</span>
          </Link>
          <Link to="/events" className="events centerContent relative">
            <img className="imageHome" src={image4} alt="" />
            <img className="imageHome" src={image4colorized} alt="" />
            <span className="title">EVENTS</span>
          </Link>
        </div>
        <div className="thirdLine">
          <Link to="/series" className="series centerContent relative">
            <img className="imageHome" src={image5} alt="" />
            <img className="imageHome" src={image5colorized} alt="" />
            <span className="title">SERIES</span>
          </Link>
          <Link to="/stories" className="stories centerContent relative">
            <img className="imageHome" src={image6} alt="" />
            <img className="imageHome" src={image6colorized} alt="" />
            <span className="title">STORIES</span>
          </Link>
          <Link
            to="/stories"
            className="storiesResponsive centerContent relative"
          >
            <img className="imageHome" src={image6responsive} alt="" />
            <img className="imageHome" src={image6responsiveColorized} alt="" />
            <span className="title">CREATORS</span>
          </Link>
        </div>
      </div>
      <div className="copyright">
        <a href="http://marvel.com" alt="" rel="noreferrer" target="_blank">
          Data provided by Marvel. © 2022 MARVEL
        </a>
      </div>
    </div>
  );
}
