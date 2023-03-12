import { headerAboutImage } from "../../../images";
import Button from "../../shared/Button/Button";
import "./AboutHeading.css";

function AboutHeading() {
  return (
    <div className="hero">
      <img src={headerAboutImage} alt="" className="hero__background" />
      <div className="hero__content">
        <h2>we all love nature</h2>
        <p>Look deep into nature and you owill understand everything better</p>
        <Button text="asda" />
      </div>
    </div>
  );
}

export default AboutHeading;