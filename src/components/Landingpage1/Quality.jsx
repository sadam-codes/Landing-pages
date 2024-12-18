import React from "react";
import Card from "../Landingpage1/Card";

function Quality() {
  return (
    <section>
      <div className="container">
        <div className="content-section">
          <div className="row">
            <div className="col-md-5" style={{ paddingBottom: "40px" }}>
              <h3>Quality Content in just one click</h3>
            </div>
            <div
              className="col-md-7 d-flex align-items-center justify-content-center"
              style={{ paddingBottom: "20px" }}
            >
              <p className="second-paragraph">
                Whether you need it urgently or just don't like to wait, our AI
                takes just seconds to deliver a complete work, no more waiting
                in commission queue.
              </p>
            </div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Quality;
