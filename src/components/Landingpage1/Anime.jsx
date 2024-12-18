import React from "react";
import check from "../../All-images/check-icon-2.png";
import animate from "../../All-images/animate-img.png";
import { Container, Row } from "react-bootstrap";

function Anime() {
  return (
    <section className="Anime-section">
   <Container>
       <Row>
          <div className="floating-image col-lg-6 col-12">
            <img src={animate} alt="Anime" />
          </div>
          <div className="data col-lg-6 col-12">
            <h1>Anime text in ablink Automatic and Immediate</h1>
            <p className="Anime-paragraph">
              The technology of our AI assure a great writing, without waiting,
              about creative block, instant content only
            </p>

            <div className="image">
              <img src={check} alt="check-icon" />
              <span>Powered by GPT-3 from open AI </span>
            </div>
            <div className="image">
              <img src={check} alt="check-icon" />
              <span> Different genres and tones </span>
            </div>
            <div className="image">
              <img src={check} alt="check-icon" />
              <span>To publish on networks or use them in your compaigns </span>
            </div>
            <div className="readmore">
              Read More <span style={{ color: "purple" }}>→</span>
            </div>
          </div>
          </Row>
        </Container>
    </section>
  );
}
export default Anime;
