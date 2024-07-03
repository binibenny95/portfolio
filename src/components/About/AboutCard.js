import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bini </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am Settled in Denmark , working as software developer in Copenhegan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Just mind your own little thing with 100% mind set!"{" "}
          </p>
          <footer className="blockquote-footer">Bini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
