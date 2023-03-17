import "./servicesbox.css";
import { servicesboximg1 } from "../../../images";
import { servicesboximg2 } from "../../../images";
import { servicesboximg3 } from "../../../images";
import Seccondarybutt from "../../shared/Secondarybutt/Seccondarybutt";
import PropTypes from "prop-types";
function Servicesbox({ tittle, tittle2, tittle1, price, text }) {
  return (
    <div className="Servicesbox">
      <div className="Servicebpx__parent">
        <div className="Servicesbox__child">
          <div className="Servicebpx--img--parent">
            <img src={servicesboximg1} alt="" className="Servicesbox__img" />
          </div>
          <div className="Servicebox__textbox">
            <p className="Servicebox__tittle">{tittle}</p>

            <p className="Servicesbox__text">{text}</p>
            <p className="Servicesbox__price">{price}</p>
            <Seccondarybutt text="Start a Project" />
          </div>
        </div>
        <div className="Servicesbox__child">
          <div className="Servicebpx--img--parent">
            <img src={servicesboximg2} alt="" className="Servicesbox__img" />
          </div>
          <div className="Servicebox__textbox">
            <p className="Servicebox__tittle">{tittle1}</p>

            <p className="Servicesbox__text">{text}</p>
            <p className="Servicesbox__price">{price}</p>
            <Seccondarybutt text="Start a Project" />
          </div>
        </div>
        <div className="Servicesbox__child">
          <div className="Servicebpx--img--parent">
            <img src={servicesboximg3} alt="" className="Servicesbox__img" />
          </div>
          <div className="Servicebox__textbox">
            <p className="Servicebox__tittle">{tittle2}</p>

            <p className="Servicesbox__text">{text}</p>
            <p className="Servicesbox__price">{price}</p>
            <Seccondarybutt
              className="Servicesbox__but"
              text="Start a Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Servicesbox.propTypes = {
  tittle: PropTypes.string.isRequired,
  tittle1: PropTypes.string.isRequired,
  tittle2: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Servicesbox;
