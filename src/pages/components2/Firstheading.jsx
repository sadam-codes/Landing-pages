import React from "react";
import Fourcards from "./Fourcards";
import { Container } from "react-bootstrap";

const Firstheading = () => {
  return (
    <Container className="border-bottom-1">
      <div className="headinggg mx-auto">
        <h1>
          <b>Start writing 10x faster with AI</b>
        </h1>
      </div>
      <p className="lorem-paragraph mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard.
      </p>
      <div className="marginn">
        <Fourcards />
      </div>
    </Container>
  );
};

export default Firstheading;
