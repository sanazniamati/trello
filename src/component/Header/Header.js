import React from "react";
import "./Header.css";
import Trello from "../images/Trello.svg";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <a href="/home">
          <img src={Trello} alt="Trello-icon" />
        </a>
      </div>
      <div className="header-sign-in-sign-up">
        <div className="header-sign-in">
          <a href="/login">Log in</a>
        </div>
        <div className="header-sign-up">
          <a href="/sign up">Sign up</a>
        </div>
      </div>
    </header>
  );
}
