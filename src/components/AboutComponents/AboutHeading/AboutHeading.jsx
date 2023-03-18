import { headerAboutImage } from "../../../images";
import "./AboutHeading.css";
import { aboutcontact } from "../../../images";
import { avataronabout } from "../../../images";
function AboutHeading() {
  return (
    <>
      <div className="hero">
        <img src={headerAboutImage} alt="" className="hero__background" />
        <div className="hero__content">
          <h2 className="Aboutheading__Aboutus">about us</h2>
        </div>
      </div>

      <p className="Aboutheading__artichle">
        We’re a highly collaborative and supportive team, coming together on
        every project to ensure our clients get the very best result.
      </p>
      <div className="Aboutheading__box">
        <img src={aboutcontact} alt="" className="Aboutheading__img" />
        <div className="Aboutheading__textbox">
          <div className="Aboutheadding__titlebox">
            <p className="Aboutheading__title">Our Mission</p>
            <p className="Aboutheading__tittle_text">
              Build the best product that creates the most value for our
              customers, use business to inspire and implement environmentally
              friendly solutions.
            </p>
          </div>
          <div className="Aboutheadding__titlebox">
            <p className="Aboutheading__title">Our Values</p>
            <p className="Aboutheading__tittle_text">
              We strive to go above and beyond for our clients no matter the
              challenge. We aim to deliver our very best work every single day
              across our services.
            </p>
          </div>
        </div>
      </div>
      <div className="Aboutheading__lastsect">
        <p className="Aboutheading__title">
          “Love Nature has an amazing team of hard working professionals. It has
          been a pleasure to meet them.”
        </p>
        <div className="Heading__avatar">
          <img src={avataronabout} alt="" className="avatarabout" />
        </div>
        <p className="emily">Emily Davis</p>
      </div>
    </>
  );
}

export default AboutHeading;
