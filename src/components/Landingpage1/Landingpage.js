import React from "react";
import Navbar2 from "../Landingpage1/Navbar2";
import Quality from "../Landingpage1/Quality";
import Anime from "../Landingpage1/Anime";
import Besttool from "../Landingpage1/Besttool";
import Animetext from "../Landingpage1/Animetext";
import Fantacystories from "../Landingpage1/Fantacystories";
import Backimage from "../Landingpage1/Backimage";
import Rightsec from "../Landingpage1/Rightsec";
import Contact from "../Landingpage1/Contact";
import Footer from "../Landingpage1/Footer";
import Backgrounddata from "../Landingpage1/Backgrouddata";

const Landingpage = () => {
  return (
    <>
      <div className="backup">
        <div className="container">
          <Navbar2 />
          <Backgrounddata />
        </div>
      </div>
      <Quality />
      <Anime />
      <Besttool />
      <Animetext />
      <Fantacystories />
      <Backimage isLandingPage={true} />
      <Rightsec />
      <Contact />
      <Footer />
    </>
  );
};

export default Landingpage;
