import React from "react";
import apple from "../images/apple.svg";
import google from "../images/google.svg";
import "./Apps.css";

export default function Apps() {
  return (
    <div>
      <section id="app">
        <div className="app-container">
          <div className="app-container-p">
            <p>Trello also works great on your smaller screen.</p>
          </div>

          <div className="app-apple-google-container">
            <div className="app-apple-google">
              <a
                href="https://apps.apple.com/app/trello-organize-anything/id461504587"
                // target="_blank"
              >
                <img src={apple} alt="Available on the App Store"></img>
              </a>
            </div>
            <div className="app-apple-google">
              <a
                href="https://play.google.com/store/apps/details?id=com.trello"
                // target="_blank"
              >
                <img src={google} alt="Get it on Google Play"></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
