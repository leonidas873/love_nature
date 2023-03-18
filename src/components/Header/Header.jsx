import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { mainLogo } from "../../images";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header">
        <img src={mainLogo} alt="logo" />
        <nav>
          <NavLink to="/love_nature" className="nav__link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/services" className="nav__link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
          <Link to="tel:2025550188">202-555-0188</Link>
        </nav>

        <div>
          <button
            className="burgermenu"
            onClick={() => setShowBurger((state) => !state)}
          >
            {showBurger ? (
              <button className="closeburger">+</button>
            ) : (
              <GiHamburgerMenu className="burger" />
            )}
          </button>
        </div>
      </div>
      <div className="burgerMenuList">
        {showBurger && (
          <div>
            {" "}
            <nav>
              <NavLink to="/love_nature" className="nav__link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav__link">
                About
              </NavLink>
              <NavLink to="/services" className="nav__link">
                Services
              </NavLink>
              <NavLink to="/contact" className="nav__link">
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
