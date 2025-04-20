import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Backimage from "../../components/Landingpage1/Backimage";
import Client from "../components2/Client";
import Footer from "../../components/Landingpage1/Footer";

function DynamicAccordian({ tableData }) {
  return (
    <>
      <Container style={{ paddingBottom: "60px" }}>
        <div className="bigcard">
          <Row>
            {tableData.map((item) => (
              <Col md={6}>
                <div
                  className="accordion-container"
                  style={{
                    width: "100%",
                    position: "relative,",
                  }}
                >
                  <Accordion className="accoridianstyling" defaultActiveKey="0">
                    <Accordion.Item className="Subject" eventKey="parent1">
                      <Accordion.Header className="subject-header text-white">
                        {item.name}
                      </Accordion.Header>
                      <Accordion.Body
                        style={{
                          zIndex: "99999",
                          position: "absolute",
                          background: "white",
                          width: "48.9%",
                          border: '1px solid white',
                          borderRadius: '10px',

                        }}
                      >
                        <Accordion>
                          <Accordion.Item
                            className="question"
                            eventKey="child1"
                          >
                            <Accordion.Header>Question</Accordion.Header>
                            <Accordion.Body>
                              <p>
                                You'll Be Surprized By The Depth Of These Leo
                                Characters
                              </p>
                              <p>
                                10 best anime Characters that you should know
                              </p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item
                            className="Bulgarian"
                            eventKey="child2"
                          >
                            <Accordion.Header>Bulgarian</Accordion.Header>
                            <Accordion.Body>
                              An aquastat is just a switch that turns the boiler
                              on and off to maintain the right water
                              temperature. An aquastat is made up of only three
                              simple parts: a switch, a temperature-sensing
                              element (also called a bulb), and a capillary tube
                              that connects the two.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item
                            className="Bulgarian"
                            eventKey="child3"
                          >
                            <Accordion.Header>Chinese</Accordion.Header>
                            <Accordion.Body>
                              Hello, this is China and an aquastat is just a
                              switch that turns the boiler on and off to
                              maintain the right water temperature. An aquastat
                              is made up of only three simple parts: a switch, a
                              temperature-sensing element (also called a bulb),
                              and a capillary tube that connects the two.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item className="df" eventKey="child4">
                            <Accordion.Header>Czech</Accordion.Header>
                            <Accordion.Body>
                              Hello, this is Czech and an aquastat is just a
                              switch that turns the boiler on and off to
                              maintain the right water temperature. An aquastat
                              is made up of only three simple parts: a switch, a
                              temperature-sensing element (also called a bulb),
                              and a capillary tube that connects the two.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            ))}
          </Row>
          <FontAwesomeIcon className="shareicon" icon={faShare} />
          <FontAwesomeIcon className="copyicon" icon={faClone} />
        </div>
      </Container>

      <div>
        <Backimage />
        <div style={{ paddingTop: "40px" }}>
          <Client />
        </div>
        <Footer />

      </div>

    </>
  );
}
export default DynamicAccordian;
