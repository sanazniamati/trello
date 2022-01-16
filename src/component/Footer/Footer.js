import React from "react";
import atlassianlogo from "../images/atlassian-logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="Home-footer">
        <div className="footer-container">
          <div className="select-container">
            <select>
              <option value="choose-one" id="choose" disabled="true">
                Select your language…
              </option>
              <option value="en" data-url="https://trello.com/en">
                English
              </option>
              <option value="cs" data-url="https://trello.com/cs">
                Čeština
              </option>
              <option value="de" data-url="https://trello.com/de">
                Deutsch
              </option>
              <option value="en-AU" data-url="https://trello.com/en-AU">
                English
              </option>
              <option value="en-GB" data-url="https://trello.com/en-GB">
                English (UK)
              </option>
              <option value="en-US" data-url="https://trello.com/en-US">
                English
              </option>
              <option value="es" data-url="https://trello.com/es">
                Español
              </option>
              <option value="fr" data-url="https://trello.com/fr">
                Français
              </option>
              <option value="it" data-url="https://trello.com/it">
                Italiano
              </option>
              <option value="hu" data-url="https://trello.com/hu">
                Magyar
              </option>
              <option value="nl" data-url="https://trello.com/nl">
                Nederlands
              </option>
              <option value="nb" data-url="https://trello.com/nb">
                Norsk (bokmål)
              </option>
              <option value="pl" data-url="https://trello.com/pl">
                Polski
              </option>
              <option value="pt-BR" data-url="https://trello.com/pt-BR">
                Português (Brasil)
              </option>
              <option value="fi" data-url="https://trello.com/fi">
                Suomi
              </option>
              <option value="sv" data-url="https://trello.com/sv">
                Svenska
              </option>
              <option value="vi" data-url="https://trello.com/vi">
                Tiếng Việt
              </option>
              <option value="tr" data-url="https://trello.com/tr">
                Türkçe
              </option>
              <option value="ru" data-url="https://trello.com/ru">
                Русский
              </option>
              <option value="uk" data-url="https://trello.com/uk">
                Українська
              </option>
              <option value="th" data-url="https://trello.com/th">
                ภาษาไทย
              </option>
              <option value="zh-Hans" data-url="https://trello.com/zh-Hans">
                中文 (简体)
              </option>
              <option value="zh-Hant" data-url="https://trello.com/zh-Hant">
                中文 (繁體)
              </option>
              <option value="ja" data-url="https://trello.com/ja">
                日本語
              </option>
            </select>
          </div>
          <ul class="global-footer-list">
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/templates">
                Templates
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/pricing">
                Pricing
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/platforms">
                Apps
              </a>
            </li>
            <li class="global-footer-list-item">
              <a
                class="global-footer-list-item-link "
                href="https://www.atlassian.com/company/careers/trello"
              >
                Jobs
              </a>
            </li>
            <li class="global-footer-list-item">
              <a
                class="global-footer-list-item-link"
                // target="_blank"
                href="https://blog.trello.com/"
              >
                Blog
              </a>
            </li>
            <li class="global-footer-list-item">
              <a
                class="global-footer-list-item-link "
                href="http://developers.trello.com"
              >
                Developers
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/about">
                About
              </a>
            </li>
            <li class="global-footer-list-item">
              <a
                class="global-footer-list-item-link "
                href="http://help.trello.com/"
              >
                Help
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/legal">
                Legal
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/#">
                Cookie Settings
              </a>
            </li>
            <li class="global-footer-list-item">
              <a class="global-footer-list-item-link " href="/privacy">
                Privacy
              </a>
            </li>
          </ul>
          <div className="global-footer-detail">
            <img
              className="global-footer-detail-img"
              src={atlassianlogo}
              alt="atlassianlogo"
            ></img>
            <p> &nbsp;© Copyright 2021. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
