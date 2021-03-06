import React from "react";
import "./PricingHome.css";
import tick from "../Pricing/pricing-image/tic.png";

export default function PricingHome() {
  return (
    <div>
      <section id="section1">
        <div className="container-section">
          <div className="ui-column main-container-section1">
            <div className="main-container-section1-d1">
              <h1>Trello your way.</h1>
              <p>
                Trusted by millions, Trello powers teams all around the world.
                <br />
                Explore which option is right for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="container-section">
          <div className=" main-container-section2 ">
            <div className=" section2-display">
              <div className="col1">
                <div className=" row1">
                  <h2>Free</h2>
                </div>
                <div className=" row2">
                  <div className=" dkqzUB">
                    <span>$</span>0<span>USD</span>
                  </div>
                  <p>Free for your whole team</p>
                </div>
                <div className=" row3">
                  <p>For individuals or teams looking to organize anything.</p>
                </div>
                <div className="row4">
                  <a href="/signup">
                    <span>Get started</span>
                  </a>
                </div>
                <div className=" row5-container">
                  <div className=" row5">
                    {/* <button data-testid="readMore">See what's included</button> */}
                    <div>
                      <h4>Included in Free:</h4>
                      <ul>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Unlimited cards
                        </li>

                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />{" "}
                          Up to 10 boards per Workspace
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Unlimited Power-Ups per board
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Unlimited storage (10MB/file)
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          250 Workspace command runs per month
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Custom backgrounds &amp; stickers
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Unlimited activity log
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          Assignee and due dates
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          iOS and Android mobile apps
                        </li>
                        <li>
                          <img src={tick} style={{ width: 30, height: 25 }} />
                          2-factor authentication
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="UiPricingGridstyles__Item-sc-e5wr9-1 cgvlUh"></div>
                </div>
              </div>
              <div className="col2">
                <div className="row1">
                  <h2>Standard</h2>
                </div>
                <div className="row2">
                  <div>
                    <span>$</span>5<span>USD</span>
                  </div>
                  <p>Per user per month billed annually ($6 billed monthly)</p>
                </div>
                <div className="row3">
                  <p>
                    For teams that need to manage more work and scale
                    collaboration.
                  </p>
                </div>
                <div className="row4">
                  <a href="/signup">
                    <span>Sign up now</span>
                  </a>
                </div>
                <div className="row5-container">
                  <div className="row5">
                    {/* <button data-testid="readMore">See what's included</button> */}
                    <div>
                      <h4>Everything in Free, plus:</h4>
                      <ul>
                        <li>Unlimited boards</li>
                        <li>Advanced checklists</li>
                        <li>Custom Fields</li>
                        <li>Unlimited storage (250MB/file)</li>
                        <li>1,000 Workspace command runs per month</li>
                        <li>Single board guests</li>
                        <li>Saved searches</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="UiPricingGridstyles__Item-sc-e5wr9-1 kjVhCh">
                  <div class="link-buttonstyles__BxpLink-sc-1utqn26-0 iyIqWK">
                    <a href="/standard">
                      <span>Learn more about Standard</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col3">
                <div className="row1">
                  <h2>Premium</h2>
                </div>
                <div className="row2">
                  <div>
                    <span>$</span>
                    10
                    <span>USD</span>
                  </div>
                  <p>
                    Per user per month billed annually ($12.50 billed monthly)
                  </p>
                </div>
                <div className="row3">
                  <p>
                    Best for teams up to 100 that need to track multiple
                    projects and visualize work in a variety of ways.
                  </p>
                </div>
                <div className="row4">
                  <a href="/signup">
                    <span>Try for free</span>
                  </a>
                </div>
                <div className="row5-container">
                  <div class="row5">
                    {/* <button data-testid="readMore">See what's included</button> */}
                    <div>
                      <h4>Everything in Standard, plus:</h4>
                      <ul>
                        <li>
                          Dashboard view &nbsp;
                          <code>NEW</code>
                        </li>
                        <li>
                          Timeline view &nbsp;
                          <code>NEW</code>
                        </li>
                        <li>
                          Workspace Table view &nbsp;
                          <code>BETA</code>
                        </li>
                        <li>
                          Calendar view &nbsp;
                          <code>NEW</code>
                        </li>
                        <li>Map view</li>
                        <li>Unlimited Workspace command runs</li>
                        <li>Admin and security features</li>
                        <li>Workspace-level templates</li>
                        <li>Collections</li>
                        <li>Observers</li>
                        <li>Priority support</li>
                        <li>Google Apps sign-on</li>
                        <li>Simple data export</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="UiPricingGridstyles__Item-sc-e5wr9-1 jLYQAy">
                  <div class="link-buttonstyles__BxpLink-sc-1utqn26-0 iyIqWK">
                    <a href="/premium">
                      <span>Learn more about Premium</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col4">
                <div className="row1">
                  <h2>Enterprise</h2>
                </div>
                <div className="row2">
                  <div>
                    <span>$</span>
                    17.50
                    <span>USD</span>
                  </div>
                  <p>
                    Per user per month billed annually ($210.00 annual price per
                    user)
                  </p>
                </div>
                <div class="row3">
                  <p>
                    For organizations that need to connect work across teams
                    with more security and controls.
                  </p>
                  <div class="UiPricingGridstyles__UserInputWrapper-sc-e5wr9-9 kJseZq">
                    <div>
                      Est. cost for
                      <input
                        type="number"
                        value="25"
                        min="25"
                        max="5000"
                      ></input>
                      users
                    </div>
                    <input type="range" value="25" min="25" max="5000"></input>
                  </div>
                </div>
                <div className="row4">
                  <a href="/enterprise#contact">
                    <span>Contact sales</span>
                  </a>
                </div>
                <div className="row5-container">
                  <div className="row5">
                    {/* <button data-testid="readMore">See what's included</button> */}
                    <div>
                      <h4>Everything in Premium, plus:</h4>
                      <ul>
                        <li>Unlimited Workspaces</li>
                        <li>Organization wide permissions</li>
                        <li>Organization visible boards</li>
                        <li>Public board management</li>
                        <li>Multi-board guests</li>
                        <li>Attachment permissions</li>
                        <li>Power-Up administration</li>
                        <li>
                          Free SSO and user provisioning with Atlassian Access
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="UiPricingGridstyles__Item-sc-e5wr9-1 lbXqrT">
                  <div class="link-buttonstyles__BxpLink-sc-1utqn26-0 iyIqWK">
                    <a href="/enterprise">
                      <span>Learn more about Enterprise</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
