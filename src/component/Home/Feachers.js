import React from "react";
import view from "../images/view.svg";
import cardback from "../images/card-back.svg";
import automation from "../images/automation.png";
import powerups from "../images/power-ups.png";
import "./Feachers.css";

export default function Feachers() {
  const [state, setState] = React.useState(false);
  return (
    <div>
      <section id="feachers">
        <div className="feachers-container">
          <div className="feachers-container-row1">
            <div className="feachers-container-row1-col1">
              <h2>Features to help your team succeed</h2>
              <p>
                Powering a productive team means using a powerful tool (and
                plenty of snacks). From meetings and projects to events and goal
                setting, Trello’s intuitive features give any team the ability
                to quickly set up and customize workflows for just about
                anything.
              </p>
            </div>
          </div>
          <div className="feachers-container-row2">
            <div className="feachers-container-row2-col1">
              <img src={view} alt="view"></img>
            </div>
            <div className="feachers-container-row2-col2">
              <h5>CHOOSE A VIEW</h5>
              <h2>The board is just the beginning</h2>
              <p>
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
              <h3>
                <a
                  href="/learn more"
                  // onClick={() => setState((prevState) => !prevState)}
                  // style={{ position: "relative" }}
                >
                  + Learn more
                </a>
              </h3>
              <div
                className="row2-feachers-flow"
                // style={{
                //   position: "absolute",
                //   top: 20,
                //   left: 0,
                //   width: "100%",
                //   height: state ? 400 : 0,
                //   background: "white",
                //   overflow: "hidden",
                //   transition: "height 500ms",
                // }}
              >
                <p>
                  You and your team can start up a Trello board in seconds. With
                  the ability to view board data from many different angles, the
                  entire team stays up-to-date in the way that suits them best:
                </p>
                <ul>
                  <li>Use a Timeline view for project planning</li>
                  <li>Calendar helps with time management</li>
                  <li>Table view connects work across boards</li>
                  <li>See board stats with Dashboard, and more!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feachers-container-row3">
            <div className="feachers-container-row3-col1">
              <h5>DIVE INTO THE DETAILS</h5>
              <h2>Cards contain everything you need</h2>
              <p>
                Trello cards are your portal to more organized work—where every
                single part of your task can be managed, tracked, and shared
                with teammates. Open any card to uncover an ecosystem of
                checklists, due dates, attachments, conversations, and more.
              </p>
              <h3>
                <a href="/learn more"> + Learn more</a>
              </h3>
              <div className="row3-feachers-flow">
                <p>
                  Spin up a Trello card with a click, then uncover everything it
                  can hold. Break down bigger card tasks into steps with file
                  attachment previews, reminders, checklists and comments—emoji
                  reactions included! Plus, gain powerful perspective by seeing
                  all cards by list and status at the board level.
                </p>
                <p>Your team can:</p>
                <ul>
                  <li>Manage deadlines</li> <li>Provide and track feedback</li>
                  <li>Assign tasks and hand off work</li>
                  <li>Connect work across apps</li>
                </ul>
              </div>
            </div>
            <div className="feachers-container-row3-col2">
              <img src={cardback} alt="card-back"></img>
            </div>
          </div>
          <div className="feachers-container-row4">
            <div className="feachers-container-row4-col1">
              <img src={automation} alt="automation"></img>
            </div>
            <div className="feachers-container-row4-col2">
              <h5>Meet your new Butler</h5>
              <h2>No-code automation</h2>
              <p>
                Let the robots do the work—so your team can focus on work that
                matters. With Trello’s built-in automation, Butler, reduce the
                number of tedious tasks (and clicks) on your project board by
                harnessing the power of automation across your entire team.
              </p>
              <h3>
                <a href="/learn more">+ Learn more</a>
              </h3>
              <div className="row4-feachers-flow">
                <p>
                  Butler uses natural language commands to automate just about
                  any task in Trello:
                </p>
                <ul>
                  <li>Automate common actions like moving lists</li>
                  <li>Create custom buttons to build process quickly</li>
                  <li>Surface upcoming deadlines to the team</li>
                  <li>Schedule teammate assignments, and more!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feachers-container-row5">
            <div className="feachers-container-row5-col1">
              <h5>Power-Ups</h5>
              <h2>Integrate top work tools</h2>
              <p>
                Easily connect the apps your team already uses into your Trello
                workflow, or add a Power-Up that helps fine-tune one specific
                need. With hundreds of Power-Ups available, your team’s workflow
                wishes are covered.
              </p>
              <h3>
                <a href="/learn more">Learn more</a>
              </h3>
            </div>
            <div className="feachers-container-row5-col2">
              <img src={powerups} alt="power-ups"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
