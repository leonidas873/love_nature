import "./OurtService.css";
import PropTypes from "prop-types";
function OurServices({ tittle, tittle2, tittle1, text, img }) {
  return (
    <div className="Ourservices">
      <h1 className="Ourservices__text__main">Our Services</h1>
      <div className="Ourservices__border"></div>
      <div className="Ourservices__boxs">
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittle}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittle1}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittle2}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
OurServices.propTypes = {
  tittle: PropTypes.string.isRequired,
  tittle1: PropTypes.string.isRequired,
  tittle2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default OurServices;
