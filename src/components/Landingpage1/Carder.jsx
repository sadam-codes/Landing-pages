import React from "react";
import facebook from "../../All-images/facebook.png";

function Carder() {
  return (
    <>
      <section className="container">
        <div className="item">
          <div className="card-image card-image-1">
            <div className="pic">
              <img src={facebook} className="img-fluid" alt="Feedback" />
            </div>
            <div>
              <h5>Lauren Andrews</h5>
              <p className="unicorn">Unicorn Exchange</p>
            </div>
          </div>
          <span className="stars"> ⭐⭐⭐⭐⭐ </span>
          <h6 className="fo">
            A 2 week copy project finished in 2 days with jasper
          </h6>
          <p className="font-small pb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            explicabo nisi distinctio deserunt, voluptates facilis amet incidunt
            cupiditate voluptatum debitis soluta quisquam unde suscipit
            asperiores sed rerum alias magni quibusdam.
          </p>
        </div>
      </section>
    </>
  );
}

export default Carder;
