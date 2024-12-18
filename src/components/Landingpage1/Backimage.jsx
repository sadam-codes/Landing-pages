import React from "react";
import Uppercontent from "../Landingpage1/Uppercontent";

function Backimage({ isLandingPage }) {
  const backgroundClass = isLandingPage
    ? "background-landing"
    : "background-normal";

  return (
    <section>
      <div className={`background ${backgroundClass}`}>
        <div className="container">
          <div className="carosol-section">
            <div className="lorem">
              <h1>What they say about us</h1>
            </div>
            <Uppercontent />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Backimage;
