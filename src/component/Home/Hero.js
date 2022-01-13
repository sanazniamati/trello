import React from "react";
import "./Hero.css";
import trelloimg from "../images/trello.png";

export default function Hero() {
  return (
    <div>
      <section id="Hero">
        <div className="hero-container">
          <div className="main-hero-container">
            <div className="left-hero">
              <h1>Trello helps teams move to work forward </h1>
              <p>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </p>
              <form className="input-button">
                <input
                  className="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <div className="btn-control">
                  <button className="submit" type="submit">
                    Sign Up-it's free
                  </button>
                </div>
              </form>
            </div>
            <div className="right-hero">
              <img src={trelloimg} alt="Trello" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
