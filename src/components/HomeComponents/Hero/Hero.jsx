import { headerHomeImage } from "../../../images";
import Button from "../../shared/Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src={headerHomeImage} alt="" className="hero__background" />
      <div className="hero__content">
        <h2>we all love nature</h2>
        <p>Look deep into nature and you owill understand everything better</p>
        <Button text="asda" />
      </div>
    </div>
  );
}

export default Hero;
