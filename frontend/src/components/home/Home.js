import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './Home.css'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homePage-Container"></div>
      <Footer />
    </>
  );
};
