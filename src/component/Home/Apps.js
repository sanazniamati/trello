import React from "react";
import apple from "../images/apple.svg";
import google from "../images/google.svg";

export default function Apps() {
  return (
    <div>
      <section id="app">
        <div className="app-container">
          <p>Trello also works great on your smaller screen.</p>
          <div className="app-apple-google">
            <a
              href="https://apps.apple.com/app/trello-organize-anything/id461504587"
              // target="_blank"
            >
              <img src={apple} alt="Available on the App Store"></img>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.trello"
              // target="_blank"
            >
              <img src={google} alt="Get it on Google Play"></img>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
