import React from "react";
import { useState } from "react";
import "./PricingHeader.css";
import icon from "./pricing-image/icon-trello.svg";
import btnselect from "./pricing-image/btnselect.svg";

export default function PricingHeader() {
  const [state, setState] = React.useState(false);

  return (
    <div className="container-PricingHeader">
      <div className="header-fixed">
        <div className="left-side-header">
          <a className="icon-trello" href="/home">
            <img src={icon} alt="icon-trello"></img>
          </a>
          <div className="item-header">
            <button
              className="btn-item-header"
              onClick={() => setState((prevState) => !prevState)}
              style={{ position: "relative" }}
            >
              Features
              <img src={btnselect} alt="btnselect"></img>
            </button>
            <button className="btn-item-header">
              Solutions
              <img src={btnselect} alt="btnselect"></img>
            </button>
            <button className="btn-item-header">
              Plans
              <img src={btnselect} alt="btnselect"></img>
            </button>
            <a href="/pricing" className="btn-item-header">
              Pricing
            </a>
            <button className="btn-item-header">
              Resources
              <img src={btnselect} alt="btnselect"></img>
            </button>
          </div>
          <div className="hide-side">
            <div
              className="feachers-hide-side"
              style={{
                position: "absolute",
                top: 20,
                left: 0,
                width: "100%",
                height: state ? 400 : 0,
                background: "white",
                overflow: "hidden",
                transition: "height 500ms",
              }}
            >
              <div className="feachers-hide-side">
                <div className="container-right-hide-side">
                  <div
                    style={{ opacity: 1 }}
                    className="right-feachers-hide-side"
                  >
                    <h3>Explore the features that help your team succeed</h3>
                    <nav>
                      <a href="/views" className="feachers-nav-a">
                        <div className="show-box-feachers">
                          <div className="show-box-feachers-row1">
                            <svg
                              width="64"
                              height="64"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M31.8115 38.0924C31.393 37.0057 29.8555 37.0057 29.4369 38.0924L27.8317 42.2604L23.6637 43.8656C22.577 44.2842 22.577 45.8217 23.6637 46.2402L27.8317 47.8454L29.4369 52.0135C29.8555 53.1002 31.393 53.1002 31.8115 52.0135L33.4167 47.8454L37.5848 46.2402C38.6715 45.8217 38.6715 44.2842 37.5848 43.8656L33.4167 42.2604L31.8115 38.0924Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0ZM46.6329 24.4498C46.2144 23.3631 44.6769 23.3631 44.2584 24.4498L42.6531 28.6178L38.4851 30.223C37.3984 30.6416 37.3984 32.1791 38.4851 32.5976L42.6531 34.2028L44.2584 38.3709C44.6769 39.4576 46.2144 39.4576 46.6329 38.3709L48.2381 34.2028L52.4062 32.5976C53.4929 32.1791 53.4929 30.6416 52.4062 30.223L48.2381 28.6178L46.6329 24.4498ZM31.8119 38.0919C31.3934 37.0052 29.8558 37.0052 29.4373 38.0919L27.8321 42.26L23.6641 43.8652C22.5773 44.2837 22.5773 45.8213 23.6641 46.2398L27.8321 47.845L29.4373 52.013C29.8558 53.0998 31.3934 53.0998 31.8119 52.013L33.4171 47.845L37.5851 46.2398C38.6719 45.8213 38.6719 44.2837 37.5851 43.8652L33.4171 42.26L31.8119 38.0919ZM22.7155 13.3671C23.2177 12.0631 25.0627 12.0631 25.565 13.3671L27.5398 18.4949L32.6675 20.4697C33.9716 20.9719 33.9716 22.8169 32.6676 23.3192L27.5398 25.294L25.565 30.4217C25.0627 31.7258 23.2177 31.7258 22.7155 30.4217L20.7407 25.294L15.6129 23.3192C14.3089 22.8169 14.3088 20.9719 15.6129 20.4697L20.7407 18.4949L22.7155 13.3671Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <p className="show-box-feachers-row2">Views</p>
                        </div>
                        <div>
                          <p>View your team’s projects from every angle.</p>
                        </div>
                      </a>
                      <a href="/butler-automation" className="feachers-nav-a">
                        <div className="show-box-feachers">
                          <div className="show-box-feachers-row1">
                            <svg
                              // style={{ marginLeft: 20, marginRight: 20 }}
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14 12.6591C14 13.7225 13.138 14.5845 12.0746 14.5845H1.92539C0.862025 14.5845 0 13.7225 0 12.6591V6.84793C0 5.78457 0.862025 4.92255 1.92539 4.92255H12.0746C13.138 4.92255 14 5.78457 14 6.84793V12.6591ZM5.93141 9.76875C5.93141 10.491 5.34594 11.0764 4.62372 11.0764C3.9015 11.0764 3.31603 10.491 3.31603 9.76875C3.31603 9.04653 3.9015 8.46106 4.62372 8.46106C5.34594 8.46106 5.93141 9.04653 5.93141 9.76875ZM9.39293 11.0764C10.1151 11.0764 10.7006 10.491 10.7006 9.76875C10.7006 9.04653 10.1151 8.46106 9.39293 8.46106C8.67071 8.46106 8.08523 9.04653 8.08523 9.76875C8.08523 10.491 8.67071 11.0764 9.39293 11.0764Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.00008 0C5.95938 0 5.11572 0.843654 5.11572 1.88435C5.11572 2.68063 5.60962 3.36154 6.30778 3.63747V4.92225L6.30853 4.95484C6.32555 5.32206 6.62866 5.61456 7.00009 5.61456C7.38244 5.61456 7.69239 5.3046 7.69239 4.92225V3.63746C8.39054 3.36153 8.88443 2.68062 8.88443 1.88435C8.88443 0.843654 8.04078 0 7.00008 0ZM7.00945 2.38385C7.28112 2.37885 7.49981 2.15706 7.49981 1.8842C7.49981 1.6082 7.27607 1.38446 7.00007 1.38446C6.72408 1.38446 6.50034 1.6082 6.50034 1.8842C6.50034 2.15707 6.71903 2.37886 6.99071 2.38385C6.99383 2.38381 6.99696 2.38379 7.00009 2.38379C7.00321 2.38379 7.00634 2.38381 7.00945 2.38385Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <p className="show-box-feachers-row2">Automation</p>
                        </div>
                        <div>
                          <p>
                            Automate tasks and workflows with Butler automation.
                          </p>
                        </div>
                      </a>
                      <a href="/power-ups" className="feachers-nav-a">
                        <div className="show-box-feachers">
                          <div className="show-box-feachers-row1">
                            <svg
                              width="91"
                              height="91"
                              viewBox="0 0 91 91"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M25.0609 81.7105C24.7484 83.0813 23.0486 83.5713 22.0543 82.5772L8.09029 68.6154C7.09602 67.6213 7.58579 65.9214 8.95652 65.6087L17.8101 63.5887L27.0795 72.8566L25.0609 81.7105Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M69.4191 47.7858L42.8745 21.2454L14.2278 49.8967C11.4358 52.6891 11.4362 57.2162 14.2286 60.0082L30.6609 76.4379C33.4534 79.2299 37.9804 79.2295 40.7723 76.4371L69.4191 47.7858ZM34.6624 61.9623C37.953 61.9621 40.6204 59.2943 40.6201 56.0036C40.6198 52.713 37.9521 50.0457 34.6614 50.0459C31.3708 50.0461 28.7034 52.714 28.7037 56.0046C28.704 59.2952 31.3718 61.9626 34.6624 61.9623ZM52.837 43.7846C52.8373 47.0753 50.1699 49.7431 46.8793 49.7433C43.5887 49.7436 40.9209 47.0762 40.9206 43.7856C40.9203 40.495 43.5877 37.8271 46.8783 37.8269C50.169 37.8267 52.8367 40.494 52.837 43.7846Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M69.4194 47.7855L76.8194 18.1752C77.4737 15.5569 75.102 13.1856 72.4838 13.8403L42.8748 21.2451L69.4194 47.7855Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <p>Power-Ups</p>
                        </div>
                        <div>
                          <p>
                            Power up your teams by linking their favorite tools
                            with Trello plugins.
                          </p>
                        </div>
                      </a>
                      <a href="/templates" className="feachers-nav-a">
                        <div className="show-box-feachers">
                          <div className="show-box-feachers-row1">
                            <svg
                              width="64"
                              height="64"
                              viewBox="0 0 64 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M64.0008 47.0028C64.0008 50.3569 61.2817 53.076 57.9276 53.076H52.3397V48.015H17.9462C14.7624 48.015 12.1509 45.5652 11.8938 42.4478H45.5495V17.6491H11.873L11.873 7.02138C11.873 3.66728 14.5921 0.948242 17.9462 0.948242H57.9277C61.2817 0.948242 64.0008 3.66727 64.0008 7.02137V47.0028Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M52.3385 17.1434C52.3385 13.7893 49.6195 11.0703 46.2654 11.0703H6.07313C2.71903 11.0703 0 13.7893 0 17.1434V49.0274H52.3385V17.1434ZM45.548 17.6495H6.57875V42.4482H45.548V17.6495Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M46.2658 63.198C49.6199 63.198 52.339 60.479 52.339 57.1249V49.0273H0V57.1249C0 60.479 2.71903 63.198 6.07313 63.198H46.2658ZM26.0639 53.8353C27.3217 53.8353 28.3413 54.8549 28.3413 56.1127C28.3413 57.3346 27.3791 58.3317 26.1711 58.3877L26.0639 58.3902H8.60366C7.34587 58.3902 6.32623 57.3705 6.32623 56.1127C6.32623 54.8909 7.28844 53.8938 8.49645 53.8378L8.60366 53.8353H26.0639ZM41.7529 52.5701C43.7094 52.5701 45.2955 54.1562 45.2955 56.1128C45.2955 58.0693 43.7094 59.6554 41.7529 59.6554C39.7963 59.6554 38.2102 58.0693 38.2102 56.1128C38.2102 54.1562 39.7963 52.5701 41.7529 52.5701Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <p>Templates</p>
                        </div>
                        <div>
                          <p>
                            Give your team a blueprint for success with
                            easy-to-use templates from industry leaders and the
                            Trello community.
                          </p>
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="container-left-hide-side">
                  <div
                    style={{ opacity: 1 }}
                    className="left-feachers-hide-side"
                  >
                    <h3>Meet Trello</h3>
                    <div>
                      <p>
                        Trello makes it easy for your team to get work done. No
                        matter the project, workflow, or type of team, Trello
                        can help keep things organized. It’s simple – sign-up,
                        create a board, and you’re off! Productivity awaits.
                      </p>
                    </div>
                    <a
                      href="/tour"
                      class="SecondaryButtonstyles__Button-sc-bpjfvj-0 cggXtn"
                    >
                      Check out Trello
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rigt-side-header">
          <a href="/login" className="rigt-side-header-login">
            Log in
          </a>
          <a href="/signup" className="rigt-side-header-signup">
            Get Trello for free
          </a>
        </div>
      </div>
    </div>
  );
}
