import { headerHomeImage } from "../../../images";
import Button from "../../shared/Button/Button";
import PropTypes from "prop-types";
import "./Hero.css";

function Hero({ text, levana }) {
  return (
    <div className="hero">
      <img src={headerHomeImage} alt="" className="hero__background" />
      <div className="hero__content">
        <h2 className="Hero__we_all">
          {text}
          <span>{levana}</span>
        </h2>
        <p className="Hero__look">
          Look deep into nature and you will understand everything better
        </p>
        <div className="Hero__button">
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
}
Hero.propTypes = {
  text: PropTypes.string.isRequired,
  levana: PropTypes.string.isRequired,
};
export default Hero;
