import React from 'react'
import '../styles/Header.css'
import logo from '../images/trello-logo.png'

function Header() {
    return (
        <div className="header">
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="trello-logo"/>
          </a>
        </div>
        <div className="sign-in-sign-up">
          <div className="sign-in">
            <a href="/login">
              <span>Log in</span>
            </a>
          </div>
          <div className="sign-up">
            <a href="/sign up">
              <spa>Sign up</spa>
            </a>
          </div>
        </div>
      </div>
    )
}
export default Header;
