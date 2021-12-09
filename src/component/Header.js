import React from 'react'
import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
        <div className="logo">Trello</div>
        <div className="sign-in-sign-up">
          <div className="sign-in">
            <button type="submit" className="btn">Sign in</button>
          </div>
          <div className="sign-up">
            <button type="submit">Sign up</button>
          </div>
        </div>
      </div>
    )
}
export default Header;
