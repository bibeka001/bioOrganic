import React from "react";
import { Link } from "react-router-dom";
import Loc from "../../infrastructure/assets/images/location2.jpg";
import Circle from "../../infrastructure/assets/images/purple_circle.png";
import BioLogo from "../../infrastructure/assets/images/bio-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footerSection">
        <div className="description">
          <div className="logoDesc">
            <img src={BioLogo} className="bio_image" />
            <h4>BioOrganics</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. enim
            quisquam necessitatibus suscipit.
          </p>
        </div>
        <div className="contact">
          <h6>Phone </h6>
          <h6>+91 123-123-0022</h6>
          <h6>Email</h6>
          <h6>Example@gmail.com</h6>
          <h6>Location</h6>
          <h6>#01, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. </h6>
        </div>
        <div className="locate">
          <h6>Locate Us</h6>
          <img src={Loc} className="locImage" />
          {/* <img src={Circle} className="purple_circle"/> */}
        </div>
        {/* <p>All Copyrights Reserved </p> */}
      </div>
      {/* <hr className="new" /> */}
    </>
  );
};

export default Footer;
