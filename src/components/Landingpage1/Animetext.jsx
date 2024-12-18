import React from "react";
import group from "../../All-images/Group 34434.png";

function Animetext() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="technology">
            <div className="tech col-lg-6 col-12">
              <h1>Anime text in ablink Automatic and Immediate</h1>
              <p className="tech-paragraph">
                The technology of our AI assure a great writing, without
                waiting, about creative block, instant content only
              </p>
            </div>
            <div className="tech-image col-lg-6 col-12">
              <img src={group} alt="group" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Animetext;
