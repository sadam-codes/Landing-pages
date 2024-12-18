import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Accordion() {
  const [activeItems, setActiveItems] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const handleToggle = (eventKey) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [eventKey]: !prevActiveItems[eventKey], 
    }));
  };
  const getIcon = (eventKey) => {
    return activeItems[eventKey] ? faMinus : faPlus;
  };

  return (
    <Container style={{ width: "80%", paddingBottom:'50px' }}>
      {/* 0 */}
      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b className="headingfirst" onClick={() => handleToggle("0")}>
          How Does Aniquest work?
          </b>
          <FontAwesomeIcon
            icon={getIcon("0")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("0")}
          />
        </div>
        {activeItems["0"] && (
          <div style={{padding:'20px'}}>
          An aniquest is just a switch that turns the boiler on and off to
            maintain the right water temperature. An aquastat is made up of only
            three simple parts: a switch, a temperature-sensing element (also
            called a bulb), and a capillary tube that connects the two.
          
          </div>
        )}
      </div>



      {/* 1 */}
      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("2")}>
            What texts can you generate with aniquest?
          </b>
          <FontAwesomeIcon
            icon={getIcon("2")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("2")}
          />
        </div>
        {activeItems["2"] && (
          <div style={{padding:'20px'}}>
            AI text generating tools do not produce whole or partially
            plagiarized compositions. These tools generate texts based on
            language models that have been trained on large amounts of data. The
            generated texts are not copies of existing texts, but rather new
            texts created from the language models.
          </div>
        )}
      </div>

      {/* 2 */}
      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("3")}>
            How does the Aniquest AI work?
          </b>
          <FontAwesomeIcon
            icon={getIcon("3")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("3")}
          />
        </div>
        {activeItems["3"] && (
          <div style={{padding:'20px'}}>
            An aquastat is just a switch that turns the boiler on and off to
            maintain the right water temperature. An aquastat is made up of only
            three simple parts: a switch, a temperature-sensing element (also
            called a bulb), and a capillary tube that connects the two.
          </div>
        )}
      </div>

      {/* 3 */}

      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("4")}>
            Can i try the Aiquest for free?
          </b>
          <FontAwesomeIcon
            icon={getIcon("4")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("4")}
          />
        </div>
        {activeItems["4"] && (
          <div style={{padding:'20px'}}>
            An aquastat is just a switch that turns the boiler on and off to
            maintain the right water temperature. An aquastat is made up of only
            three simple parts: a switch, a temperature-sensing element (also
            called a bulb), and a capillary tube that connects the two.
          </div>
        )}
      </div>

      {/* 4 */}

      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("5")}>
            Can the AI write stories or posts of +1000 words?
          </b>
          <FontAwesomeIcon
            icon={getIcon("5")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("5")}
          />
        </div>
        {activeItems["5"] && (
          <div style={{padding:'20px'}}>
            Yes, as an AI language model, I can certainly write stories or posts
            that exceed 1000 words. In fact, I can generate text of varying
            lengths, from short paragraphs to long essays, depending on your
            specific requirements. Whether you need a fictional story, an
            informative article, a blog post, or any other form of written
            content, I can assist you in crafting it. Please provide me with the
            details or the topic you'd like the story or post to be about, and
            I'll be happy to create the content for you!
          </div>
        )}
      </div>

      {/* 5 */}

      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("6")}>
            Is the content generated by Aniquest AI original?
          </b>
          <FontAwesomeIcon
            icon={getIcon("6")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("6")}
          />
        </div>
        {activeItems["6"] && (
          <div style={{padding:'20px'}}>
            Yes, it might be riginal. But in many cases it returns the relavant
            data and not provide us the complete and ethentic data. But we it is
            very helpfull.
          </div>
        )}
      </div>

      {/* 6 */}

      <div style={{ borderRadius: "5px", border: "1px solid white" }}>
        <div className="headingstyling">
          <b onClick={() => handleToggle("7")}>
            How can i make the AI check my texts?
          </b>
          <FontAwesomeIcon
            icon={getIcon("7")}
            className="toggle-icon"
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => handleToggle("7")}
          />
        </div>
        {activeItems["7"] && (
            <div style={{padding:'20px'}}>
            Simply write or paste your text in the conversation, and let it know
            what type of check you want (e.g., grammar, readability). And it
            will provide feedback and suggestions accordingly. In the service of
            our people first initiative
          </div>
        )}
      </div>
    </Container>
  );
}

export default Accordion;
