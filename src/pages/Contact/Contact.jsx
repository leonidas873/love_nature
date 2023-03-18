import Button from "../../components/shared/Button/Button";
import { headerContactImage } from "../../images";
import "./Contact.css";
import { avatar1Image } from "../../images";
import { avatar2Image } from "../../images";
import { avatar3Image } from "../../images";
import { avatar4Image } from "../../images";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Contact() {
  return (
    <div className="contactus_wrapper">
      <div className="contactus_head">
        <h1>contact us</h1>
        <img src={headerContactImage} alt="" className="contact__background" />
      </div>
      <div className="contactus_main">
        <div className="contactus_first_second_item_wrapper">
          <div className="contactus_main_first_item">
            <h2>You can find us at</h2>
            <div>
              <h3>EMAIL</h3>
              <p>hello@tyler.com</p>
            </div>

            <div>
              <h3>PHONE NUMBER</h3>
              <p>202-555-0188</p>
            </div>

            <div>
              <h3>LOCATION</h3>
              <p>2360 Hood Avenue, San Diego CA, 92123</p>
            </div>
            <div>
              <FaTwitter className="contactus_main_first_item_icon" />
              <FaInstagram className="contactus_main_first_item_icon" />
              <FaYoutube className="contactus_main_first_item_icon" />
            </div>
          </div>

          <div className="contactus_main_second_item">
            <h2>let&apos;s get in touch</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              rows="5"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Message"
            ></textarea>
            <Button text="send message" />
          </div>
        </div>
        <div className="contactus_main_third_item">
          <h4>We are optimists who love to work together</h4>
          <div>
            <img src={avatar1Image} alt="first avatar photo" />
            <img src={avatar2Image} alt="second avatar photo" />
            <img src={avatar3Image} alt="third avatar photo" />
            <img src={avatar4Image} alt="fourth avatar photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
