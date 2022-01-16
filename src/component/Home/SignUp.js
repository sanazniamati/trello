import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div>
      <section className="sign_up_container">
        <div className="sign_up">
          <div className="sign_up_text">
            <div className="sign_up_text_h3">
              <h3>
                Sign up and get started with Trello today. A world of productive
                teamwork awaits!
              </h3>
            </div>
            <div className="btn_signup_email">
              <input placeholder="Email" type="email"></input>
              <button type="submit" className="btn_signup_container">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
