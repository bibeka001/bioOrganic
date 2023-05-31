import React from "react";
import Navbar from "../Navbar/Navbar";
import SheImage from "../../infrastructure/assets/images/she.png";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      {/* <div> */}
        <div className="home">
          <div className="dashboard">
            <h1>Trusted Manufacturer of </h1>
            <h1>Speciality Research</h1>
            {/* <h1>Chemicals</h1> */}
          </div>
          <div className="research">
            <img src={SheImage} className="sheImage" alt="" />
          </div>
        </div>
        {/* <div> */}
          <div className="card_desc">
            <div>
              <h3>Our</h3>
              <h2>Lates Products</h2>
            </div>
          </div>
          <div className="card">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
      <Footer />
    </>
  );
};
export default Home;
