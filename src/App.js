import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./presentation/Home/Home";
import Navbar from "./presentation/Navbar/Navbar";
import Footer from "./presentation/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
