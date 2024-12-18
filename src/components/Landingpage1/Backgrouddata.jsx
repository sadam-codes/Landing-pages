import React from "react";
import checkimage from "../../All-images/check-icon.png";
function Backgrounddata() {
  return (
    <div className="container">
 <div className="row">
      <div className="heading col-md-9 col-12">
        <h1>
          <b>Fast and Automatic Anime and Fantacy Writing </b>
        </h1>
        <p className="paragraph">
          Text written by Artificial inteligence <br />
          immediate , easy and with amazing results
        </p>
        <div className="second-buttons">
          <button className="button1">FREE TRIAL</button>
          <button className="button2">SIGN UP WITH GOOGLE</button>
        </div>
      </div>
      <div className="flex-content col-md-3 col-12">
        <button className="check-button">
          <img src={checkimage} alt="check icon" /> Develop Publications
        </button>
        <button className="check-button">
          <img src={checkimage} alt="check icon" /> Perfect for Fan fiction
        </button>
        <button className="check-button">
          <img src={checkimage} alt="check icon" />
          Perfect for Fan fiction
        </button>
      </div>
    </div>
    </div>
   
  );
}
export default Backgrounddata;
