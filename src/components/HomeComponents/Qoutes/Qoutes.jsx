import "./qoutes.css";
import PropTypes from "prop-types";
import { avatar } from "../../../images";
function Qoutes() {
  return (
    <div className="Qoutes">
      <p className="Qoutes__text">
        “Original and with an innate understanding of their customer’s needs,
        the team at Love Nature are always a pleasure to work with.”
      </p>
      <img src={avatar} alt="" className="Qoutes__avatar" />
      <p className="Qoutes__jane">Jane Miller</p>
    </div>
  );
}
Qoutes.propTypes = {
  avatar: PropTypes.string.isRequired,
};
export default Qoutes;
