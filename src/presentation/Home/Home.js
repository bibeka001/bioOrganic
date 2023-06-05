import React from "react";
import Navbar from "../Navbar/Navbar";
import SheImage from "../../infrastructure/assets/images/she.png";
import She2Image from "../../infrastructure/assets/images/she2.png";

import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="home">
          <div className="dashboard">
            <h1>Trusted Manufacturer of </h1>
            <h1>Speciality Research</h1>
            <h1>Chemicals</h1>
          </div>
          <div className="research">
            <img src={SheImage} className="sheImage" alt="" />
          </div>
        </div>
        <div className="card_section">
          <div className="text_center ">
            <h3>Our</h3>
            <h1>Latest Products</h1>
            <button type="button" className="show_button">
              Show More
            </button>
          </div>

          <div className="cards">
            <div className="chem_formula"></div>
            <div className="chem_formula"></div>
          </div>
        </div>
        <div className="sub_head">
          <div className="subhead_image">
            <img src={She2Image} className="sub_image" />
          </div>
          <div className="subhead_desc">
            <h2>About</h2>
            <h1>Sub Heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              explicabo dignissimos quibusdam assumenda optio enim cumque
              praesentium eum? Quos quis necessitatibus sit provident mollitia!
              Exercitationem soluta error qui aliquam sequi.
            </p>
            <button type="button" className="subhead_button">
              Know More
            </button>
          </div>
        </div>
        <div className="expertise">
          <div className="product">
            <h4>Area of expertise</h4>
            <h1>product categories</h1>
            <p>
              This seciton can be a icon box or image box based on categories
            </p>
            <button type="button" className="expertise_button">
              Know more
            </button>
          </div>
          <div className="product_type">
            <div className="product_check">
              <button className="check_button">Check</button>
            </div>
            <div className="product_check">
              <button className="check_button">Check</button>
            </div>
            <div className="product_check">
              <button className="check_button">Check</button>
            </div>
          </div>
        </div>
        <h1>Certificates of accreditations</h1>
        <div className="certificates">
          <div className="certificate1"></div>
          <div className="certificate2"></div>
          <div className="certificate1"></div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
 