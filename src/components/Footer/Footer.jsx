import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <img
          src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-green.svg"
          alt="footer_img"
        />

        <p>Love Nature by Tyler Moore</p>
      </div>
    </div>
  );
}

export default Footer;
