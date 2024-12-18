import React from "react";
import reddit from "../../All-images/reddit-logo.png";
import writeas from "../../All-images/writeas-img.png";
import quora from "../../All-images/quora-img.png";
import ghost from "../../All-images/ghost-img.png";
import askFm from "../../All-images/askFm-img.png";
import animeplanet from "../../All-images/animeplanet-img.png";
import wikiHow from "../../All-images/wikiHow-img.png";
import Stack_Exchange from "../../All-images/Stack_Exchange_img.png";
import answers from "../../All-images/answers-img.png";
import MyAnimeList from "../../All-images/MyAnimeList-img.png";
import stackOverflow from "../../All-images/stackOverflow-img.png";
import medium from "../../All-images/medium-img.png";
import ask from "../../All-images/ask-img.png";


function Besttool() {
  return (
    <section>
      <div className="container m-50">
        <div className="row">
          <div className="image-gallery">
            <h1>The best tool for</h1>
            <div className="seven-images-gallery">
              <img src={reddit} alt="Redditimage" />
              <img src={writeas} alt="Write.as" />
              <img src={quora} alt="Quora" />
              <img src={ghost} alt="Ghost" />
              <img src={askFm} alt="AskFm" />
              <img src={animeplanet} alt="animeplane" />
              <img src={wikiHow} alt="wikiHow" />
            </div>
            <div className="six-images-gallery">
              <img src={Stack_Exchange} alt="Stack_Exchange" />
              <img src={answers} alt="Answer" />
              <img src={MyAnimeList} alt="MyAnimeList" />
              <img src={stackOverflow} alt="stackOverflow" />
              <img src={medium} alt="Medium" />
              <img className="ask" src={ask} alt="Ask" />
            </div>
          </div>
        </div>
      </div>
      <div className="more">
        <center>
          <b> And many more </b>
        </center>
      </div>
    </section>
  );
}
export default Besttool;
