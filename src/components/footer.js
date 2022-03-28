import React from "react";
import "./footer.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer_body">
      <div className="footer_section1">
        <h3>Follow Us</h3>
        <div className="footer_socialLinks">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="footer_section2">
        <div className="footer_otherLinks">
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
          <a href="">Data Rights</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          voluptatum.
        </p>
        <p>© Copyright Lorem ipsum dolor sit amet. 2022</p>
      </div>
    </div>
  );
}
