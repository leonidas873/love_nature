import "./servicesheader.css";
import { headerHomeImage } from "../../images";
function Servicesheader() {
  return (
    <div className="Servicesheader">
      <img src={headerHomeImage} alt="" className="Services__background" />
      <div className="last__content">
        <h2 className="last__we_all">our services</h2>
      </div>
    </div>
  );
}
export default Servicesheader;
