import React, { useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";

const InputText = ({ tableData, setTableData }) => {
  const [inputs, setInputs] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent from page reloading

    if (inputs.name.trim() !== "") {
      setTableData([...tableData, inputs]);
    }
    setInputs({
      name: "",
    });
  };
  return (
    <Container>
      <Row>
        <Col xs lg="8">
          <div
            className="d-flex flex-column flex-lg-row"
            style={{ paddingTop: "166px" }}
          >
            <div className="mb-3">
              <Form className="set-accordion">
                <fieldset disabled>
                  <Form.Group>
                    <Form.Select
                      className="setaccordian"
                      style={{ width: "100%" }}
                    >
                      <option>All</option>
                    </Form.Select>
                  </Form.Group>
                </fieldset>
              </Form>
            </div>
            <Form onSubmit={handleSubmit}>
              <input
                className="inputtext"
                name="name"
                value={inputs.name}
                type="text"
                id="myInput"
                placeholder="Enter What You Need"
                onChange={handleChange}
                autoComplete="off"
              />
            </Form>
            <button onClick={handleSubmit} className="submitbutton">
              Submit
            </button>
          </div>
        </Col>

        <Col xs lg="4" style={{ paddingTop: "50px", paddingBottom: "20px" }}>
          <div className="small-card">
            <div className="slider-container">
              <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
                Max.Length
              </h2>
              <input type="range" className="custom-slider" />
              <div className="range-button start-button"></div>
              <div className="range-button end-button"></div>
            </div>

            <div className="displaingflex">
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  256
                </h2>
                <p style={{ fontSize: "11px" }}>Standard</p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  512
                </h2>
                <p style={{ fontSize: "11px" }}>Medium</p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    paddingTop: "10px",
                  }}
                >
                  1500
                </h2>
                <p style={{ fontSize: "11px" }}>Large</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default InputText;
