import "./Aboutus.css";
import { leaf } from "../../../images";
import Seccondarybutt from "../../shared/Secondarybutt/Seccondarybutt";
function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="Aboutus__left">
        <p className="Aboutus__title">About Us</p>
        <p className="Aboutus__text">
          Tell website visitors who you are and why they should choose your
          business.
        </p>
        <p className="Aboutus__text1">
          Because when a visitor first lands on your website, you’re a stranger
          to them. They have to get to know you in order to want to read your
          blog posts, subscribe to your email newsletter, or buy what you’re
          selling.
        </p>
        <Seccondarybutt text="Find Out More" />
      </div>
      <div className="leaf">
        <img src={leaf} alt="" className="leaf__img" />
      </div>
    </div>
  );
}

export default Aboutus;
