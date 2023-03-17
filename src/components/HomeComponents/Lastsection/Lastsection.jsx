import { headerHomeImage } from "../../../images";
import Button from "../../shared/Button/Button";

import "./Lastsection.css";

function Lastsection() {
  return (
    <div className="Lastsection">
      <img src={headerHomeImage} alt="" className="lastsect__background" />
      <div className="last__content">
        <h2 className="last__we_all">QUESTIONS?</h2>
        <p className="last__look">
          Whether you’re curious about features, a free trial, or even press,
          we’re here to answer any questions.
        </p>
        <div className="last__button">
          <Button text="Lets Talk Now" />
        </div>
      </div>
    </div>
  );
}

export default Lastsection;
