import "./OurtService.css";
import PropTypes from "prop-types";
function OurServices({ tittleweb, tittlecontent, tittlegraphic, text, img }) {
  return (
    <div className="Ourservices">
      <h1 className="Ourservices__text__main">Our Services</h1>
      <div className="Ourservices__border"></div>
      <div className="Ourservices__boxs">
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittleweb}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittlegraphic}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
        <div className="Ourservices__box">
          <img src={img} alt="" className="Ourservices__img" />
          <p className="Ourserv0ces__title">{tittlecontent}</p>
          <p className="Ourservices__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
OurServices.propTypes = {
  tittleweb: PropTypes.string.isRequired,
  tittlegraphic: PropTypes.string.isRequired,
  tittlecontent: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default OurServices;
