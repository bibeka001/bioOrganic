import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./presentation/Home/Home";
import Navbar from "./presentation/Navbar/Navbar";
import Footer from "./presentation/Footer/Footer";
import Corporate from "./presentation/Corporate/Corporate";
import Services from "./presentation/Services/Services";
import Contact from "./presentation/Contact/Contact";
import Products from "./presentation/Products/Products";
import Enquirylist from "./presentation/Enquiry List/Enquirylist";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/enquirylist" element={<Enquirylist />} />
      </Routes>
    </div>
  );
};

export default App;
