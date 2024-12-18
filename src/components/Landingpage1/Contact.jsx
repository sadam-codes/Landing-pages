import React from "react";
import Rightsec from "./Rightsec";
function Contact() {
  return (
    <>
      <Rightsec />
      <div className="backgroundtwo">
        <div className="container">
          <div className="last-part"></div>
        </div>
      </div>
      <section>
        <div className="coloring">
          <div className="container">
            <div className="row">
              <div className="flexing">
                <div className="ending col-md-3">
                  <h4>CLIENTS</h4>
                  <p className="last-para">Login</p>
                  <p className="last-para">Sign up</p>
                </div>
                <div className="ending col-md-3">
                  <h4>SOCIAL MEDIA</h4>
                  <p className="last-para">Twitter</p>
                </div>
                <div className="ending col-md-3">
                  <h4>LEGAL INFO</h4>
                  <p className="last-para">Legal information</p>
                  <p className="last-para">Terms and conditions</p>
                  <p className="last-para">Privacy policy</p>
                </div>
                <div className="ending col-md-3">
                  <h4>SUPPORT</h4>
                  <p className="last-para">Helpdesk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
