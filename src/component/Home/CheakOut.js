import React from "react";
import tag from "../images/tag.svg";
import compass from "../images/compass.svg";
import "./CheakOut.css";

export default function CheakOut() {
  function MouseOver(event) {
    event.target.style.background = "#0065ff";
    event.target.style.color = "#ffffff";
  }
  function MouseOut(event) {
    event.target.style.background = "";
    event.target.style.color = "#0065ff";
  }
  return (
    <div>
      <section id="cheak-out">
        <div className="check-out-container">
          <div className="check-out-container-col">
            <div className="check-out-container-img">
              <img src={tag} alt="tag"></img>
            </div>
            <div className="check-out-container-text">
              <h3>See our pricing</h3>
              <p>
                Whether you’re a team of 2 or 2,000, there’s a Trello
                tailor-made for your organization.
              </p>
              <p>
                <a
                  href="/pricing"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                >
                  Trello pricing
                </a>
              </p>
            </div>
          </div>
          <div className="check-out-container-col">
            <div className="check-out-container-img">
              <img src={compass} tag="compass" alt="compass"></img>
            </div>
            <div className="check-out-container-text">
              <h3>Take a Trello tour</h3>
              <p>
                Explore the world of boards and beyond in Trello. Dive deeper
                into our most popular features.
              </p>
              <p>
                <a href="/tour" onMouseOver={MouseOver} onMouseOut={MouseOut}>
                  Tour Trello
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
