import React from "react";
import { Container, Row } from "react-bootstrap";

function Client() {
  return (
    <div className="section coloring">
      <Container>
        <Row className="client-coloring">
          <div className="ending col-md-3 col-sm-6">
            <h4>CLIENTS</h4>
            <p className="last-para">Login</p>
            <p className="last-para">Sign up</p>
          </div>
          <div className="ending col-md-3 col-sm-6">
            <h4>SOCIAL MEDIA</h4>
            <p className="last-para">Twitter</p>
          </div>
          <div className="ending col-md-3 col-sm-6">
            <h4>LEGAL INFO</h4>
            <p className="last-para">Legal information</p>
            <p className="last-para">Terms and conditions</p>
            <p className="last-para">Privacy policy</p>
          </div>
          <div className="ending col-md-3 col-sm-6">
            <h4>SUPPORT</h4>
            <p className="last-para">Helpdesk</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Client;
