import React from 'react'
import trelloimg from '../images/trello.png'
import '../styles/Content.css'


function Content() {
    return (
      <div className="content">
        <div className="left-content">
          <div className="main-content">
             <h1>Trello helps teams move to work forward </h1>
             <p>Collaborate, manage projects, and reach new productivity peaks.
                   From high rises to the home office, 
                   the way your team works is unique—accomplish it all with Trello.</p>
          </div>
          <form className="input-button">
             <input name="email" type="email" placeholder="Email"/>
             <div className="btn-control">
                <button type="submit">Sign Up-it's free</button>
              </div>
                            
          </form>
          </div>
        <div className="right-content">
          <img  style={{width:300,height:300}}src={trelloimg} alt="Trello" />
        </div>
      </div>
    )
}

export default Content
