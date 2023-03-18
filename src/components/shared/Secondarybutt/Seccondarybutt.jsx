import PropTypes from "prop-types";
import "./seccondartbutt.css";

function Seccondarybutt({ text }) {
  return <button className="Second-button">{text}</button>;
}

Seccondarybutt.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Seccondarybutt;
