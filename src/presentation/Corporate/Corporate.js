import React from "react";
import Corporate_img1 from "../../infrastructure/assets/images/corporate-pic1.png";
import Corporate_img2 from "../../infrastructure/assets/images/corporate-pic2.png";
const Corporate = () => {
  return (
    <>
      <div className="container-fluid corporate text-center">
        <div className="row justify-content-start">
          <div className="col-6">
            <h1>State of the Art</h1>
            <h1>laboratory in Bangalore</h1>
            <p>
              Recognized By DSIR, Department of Biotechnology, Department of
              Atomic Energy, Government of India.
            </p>
            <p>
              BioOrganics lab is the only laboratory in the country to have a
              unique collaborative agreement with the Department of Atomic
              Energy's Heavy Water Board for the supply of Deuterium Oxide for
              Research and Develoment in the Non-nuclear use of Heavy Water
            </p>
          </div>
          <div className="col-6">
            <img src={Corporate_img1} className="corp_image1" />
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-6">
            <img src={Corporate_img2} className="corp_image2" />
          </div>
          <div className="col-6">
            <h1>About</h1>
            <h1>Our Story</h1>
            <p>
              BioOrganics is a leading manufacturer of speciality research
              chemicals for pharmaceutical and biomedical research. The company
              was founded by Dr. VijayKumar Hulikal, a distinguished scientist
              in the year 2001.
            </p>
            <p>
              BioOrganics was conceptualized with Dr. Hulikal's vision of a
              seamless amalgamation of academia and industry for providing
              medicinal chemistry and organic synthetic services of the highest
              quality.
            </p>
            <p>
              The company has developed technologies for the manufacturers of
              Stable Isotope Labeled products, Reference Standards, Metabolites,
              Impurities and Glucoronides among its vast array of 20,000+
              products. BioOrganics also provides custom synthesis of organic
              compounds.
            </p>
            <p>
              Labelling Chemistry BioOrganics has championed the field of
              Deuterium
            </p>
          </div>
        </div>
        <div className="promise">
          {/* <h1>Ther BioOrganics Promise</h1> */}
          <div className="quality">
            {/* <div>
              <h6>Quality</h6>
              <p>
                All Products well characterized using NMR, MS and HPLC,
                Certificate of Analysis will be provided.
              </p>
            </div> */}
          </div>
          <div className="confidentiality"></div>
          <div className="time_frame"></div>
        </div>
        <div className="bio_cause">
          <div className="expert1">
            <button type="button" className="expert_button"></button>
          </div>
          <div className="expert1">
            <button type="button" className="expert_button"></button>
          </div>
          <div className="expert1">
            <button type="button" className="expert_button"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
