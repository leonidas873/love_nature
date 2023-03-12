import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { mainLogo } from "../../images";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header">
        <img src={mainLogo} alt="logo" />
        <nav>
          <NavLink to="/" className="nav__link">
            home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            about
          </NavLink>
          <NavLink to="/services" className="nav__link">
            services
          </NavLink>
          <NavLink to="/contact" className="nav__link">
            contact
          </NavLink>
          <Link to="tel:2025550188">202-555-0188</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
