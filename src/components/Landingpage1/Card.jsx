import React from "react";
import openbook from "../../All-images/open-book 1.png";

function Card() {
  return (
<div className="col-md-4 col-12">
        <div className="feature-box">
          <div className="photo">
            <img
              className="three-images rounded-pill"
              src={openbook}
              alt="open-book"
            />
          </div>
          <h4 className="fo">Full Stories</h4>
          <p className="card-font mb-0">
            Interseting and complex, with a good devlopment and ending.
          </p>
        </div>
      </div>

  );
}
export default Card;
