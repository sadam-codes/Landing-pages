import React from "react";
import Sdata from "./Sdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Container, Row } from "react-bootstrap";

function Fourcards() {
  return (
    <div>
      <Container>
        <Row>
          {Sdata.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <Card
                className="card"
                style={{
                  width: "auto",

                  border:
                    index === 0 ? "1px solid purple" : "1px solid whitesmoke",
                }}
              >
                <div
                  style={{
                    background: "whitesmoke",
                    textAlign: "center",
                    padding: "25px",
                  }}
                >
                  {index === 1 ? (
                    <button className="best-saller">{item.sellerButton}</button>
                  ) : null}
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: "2rem",
                      marginBottom: "0",
                    }}
                  >
                    {item.heading}
                  </h4>
                  <h1>
                    <span>
                      <b
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <article
                          style={{
                            fontWeight: "600",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            textAlign: "center",
                            fontSize: "18px",
                          }}
                        >
                          $
                        </article>
                        123
                        <span
                          style={{
                            fontWeight: "100",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            textAlign: "center",
                            fontSize: "18px",
                          }}
                        >
                          /month
                        </span>
                      </b>
                    </span>
                  </h1>
                </div>
                <div className="card-info">
                  <p
                    className="font-sizing disabled"
                    style={{ padding: "30px 10px" }}
                  >
                    <div className="progress-lable">
                      <label for="customRange1" classname="form-label">
                        {item.label}
                      </label>
                      <label for="customRange1" classname="form-label">
                        {item.label2}
                      </label>
                    </div>
                    {index === 3 ? (
                      <input type="range" class="progress" />
                    ) : null}
                    {item.paragraphOne}
                  </p>

                  <p
                    className="font-sizing disabled"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <FontAwesomeIcon className="padder" icon={faCheck} />
                    {item.paragraphTwo}
                  </p>
                  <p
                    className="font-sizing disabled"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <FontAwesomeIcon className="padder" icon={faCheck} />
                    {item.paragraphThree}
                  </p>
                  <p
                    className="font-sizing disabled"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <FontAwesomeIcon className="padder" icon={faCheck} />
                    {item.paragraphFour}
                  </p>
                  <p
                    className="font-sizing disabled"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <FontAwesomeIcon className="padder" icon={faCheck} />
                    {item.paragraphFive}
                  </p>
                  <p
                    className="font-sizing disabled"
                    style={{ paddingBottom: "1.5rem" }}
                  >
                    <FontAwesomeIcon className="padder" icon={faCheck} />
                    {item.paragraphSix}
                  </p>
                  <div
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <button className="upgraedeButton btn btn-outline-dark text-align-center">
                      {item.button}
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Fourcards;
