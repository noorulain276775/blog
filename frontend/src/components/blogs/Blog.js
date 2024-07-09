import React, { useEffect } from "react";
import "./Blog.css";
import { useDispatch } from "react-redux";
import myImage from "../../assets/images/culture.jpeg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export const Blog = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(blogData());
  // }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="mainDiv">
        <h1>This is the title</h1>
        <div className="imageDiv">
          <img src={myImage} alt="culture" />
        </div>
        <p>Short description</p>
        <p>Description</p>
      </div>
      <Footer />
    </>
  );
};
