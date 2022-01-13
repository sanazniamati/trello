import React from "react";

export default function SignUp() {
  return (
    <div>
      <section id="sign-up">
        <div className="sign-up-container">
          <div className="sign-up-container-inner-text">
            <div className="inner-text-row1">
              <h3>
                Sign up and get started with Trello today. A world of productive
                teamwork awaits!
              </h3>
            </div>
            <div className="inner-text-row2">
              <input type="email" placeholder="email"></input>
              <button type="submit">Sign Out</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
