import "./About.css";
import logoGoogle from "../images/logo-google.svg";
import logoFender from "../images/logo-fender.svg";
import squareSpace from "../images/Squarespace_Logo_2x.webp";
import costco from "../images/logo-costco.svg";
import logoLush from "../images/logo-lush.svg";
import logoPinterest from "../images/logo-pinterest.svg";
import logoPeloton from "../images/Peloton_Standard_Lockup_RGB_1.svg";
import logoWired from "../images/about-wired-logo.png";
import logoForbes from "../images/about-forbes-logo.png";
import logoWsj from "../images/about-wsj-logo.png";
import logoTechcrunch from "../images/about-techcrunch-logo.png";
import logoLanguge from "../images/logo-language.jpg";

function About() {
  return (
    <div className="About">
      <section id="about-header">
        <div className="about-header-container">
          <h1>About Trello</h1>
          <p>What’s behind the boards.</p>
        </div>
      </section>

      <section id="About-team-works">
        <div className="about-team-works-container">
          <div className="about-team-works">
            <h2>The way your team works is unique — so is Trello.</h2>
            <p>
              Trello is the flexible work management tool where teams can ideate
              plans, collaborate on projects, organize workflows, and track
              progress in a visual, productive, and rewarding way. From
              brainstorm to planning to execution, Trello manages the big
              milestones and the day-to-day tasks of working together and
              getting things done.
            </p>
          </div>
          <div className="about-team-works-btn">
            <a href="//assets.ctfassets.net/rz1oowkt5gyp/ap0lppt3EsODuMBYtOoNA/bf80097eebd41e24f8315bdb371464f0/Trello_Logo_assets.zip">
              <span>Download the Brand Assets (ZIP)</span>
            </a>
          </div>
        </div>
      </section>

      <section id="About-brif-history">
        <div className="about-brif-history-container">
          <div className="grid-about-brif-history">
            <div className="flex-about-brif-history">
              <h2>A brief history of Trello</h2>
              <ul>
                <li>
                  <p>
                    Around the summer of 2010,
                    <a
                      href="https://www.fogcreek.com/?fccmp=trello_about"
                      title="Fog Creek Software"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Fog Creek Software
                    </a>
                    starts doing regular Creek Weeks, internal explorations for
                    potential products. In January 2011, a prototype that hopes
                    to solve some high-level planning issues is pitched. It’s
                    called Trellis. Full time development begins soon after.
                  </p>
                </li>
                <li>
                  <p>
                    After a closed beta, Trello launches at TechCrunch Disrupt
                    in September of 2011 with apps for the web and iPhone. We
                    narrowly avoid names like Cardvark and Planatee and go with
                    the name Trello.
                  </p>
                </li>
                <li>
                  <p>
                    In the summer of 2012, Fog Creek co-founder Joel Spolsky’s
                    dog Taco becomes the official Trello spokes-husky. Trello
                    reaches 500,000 members and launches the Trello Android app.
                  </p>
                </li>
                <li>
                  <p>Bug fixes and performance improvements.</p>
                </li>
                <li>
                  <p>
                    In July 2014, Trello spins off from Fog Creek and becomes
                    Trello, Inc. naming Fog Creek co-founder Michael Pryor as
                    its CEO. The company raises $10.3 million in a Series A
                    round of funding led by
                    <a
                      href="https://www.sparkcapital.com/"
                      title="Spark Capital"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Spark Capital
                    </a>
                    and
                    <a
                      href="https://www.indexventures.com/"
                      title="Index Ventures"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Index Ventures
                    </a>
                    . Trello has over 4.75 million users.
                  </p>
                </li>
                <li>
                  <p>
                    In May 2015, Trello goes international, with localized
                    experiences for Brazil, Germany, and Spain.
                  </p>
                </li>
                <li>
                  <p>
                    In early 2017, Trello is
                    <a
                      href="http://blog.trello.com/trello-atlassian"
                      title="acquired by Atlassian"
                      // target="_blank"
                      // rel="noopener"
                    >
                      acquired by Atlassian
                    </a>
                    and begins the next chapter in empowering teams everywhere.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.atlassian.com/company/careers/trello"
                      title="Help us add more things to this list"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Help us add more things to this list.
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="About-support">
        <div className="about-support-container">
          <div className="main-about-support">
            <div>
              <p>
                <strong>Millions of people</strong> and companies of all kinds
                and sizes love using Trello.
              </p>
            </div>
            <ul className="about-first-ul">
              <li>
                <img src={logoGoogle} alt="logo-google"></img>
              </li>
              <li>
                <img src={logoFender} alt="logo-fender"></img>
              </li>
              <li>
                <img
                  src={squareSpace}
                  style={{ width: 220, hight: 30.5 }}
                  alt="logo-squareSpace"
                ></img>
              </li>
              <li>
                <img src={costco} alt="costco"></img>
              </li>
            </ul>
            <ul className="about-secend-ul">
              <li>
                <img src={logoLush} alt="logoLush"></img>
              </li>
              <li>
                <img src={logoPinterest} alt="logoPinterest"></img>
              </li>
              <li>
                <img src={logoPeloton} alt="logoPeloton"></img>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="About-trello">
        <div className="about-trello-container">
          <div className="about-trello-main">
            <h2>Trello in the Press</h2>
            <p>
              “Trello is an online tool for managing projects and personal
              tasks. That may sound rather prosaic. But this increasingly
              popular app often inspires the sort of passion usually reserved
              for consumer apps like Pinterest or Instagram. It’s the kind of
              business software that slips into businesses through the backdoor,
              just because individual employees like how it works.”
            </p>
            <p>
              <a
                href="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/7b505b2776a61194d5061b8e6a55bee7/about-wired-logo.png"
                // target="_blank"
                // rel="noopener"
              >
                <img alt="about-wired-logo" src={logoWired}></img>
              </a>
            </p>
            <p>&nbsp;</p>
            <p>
              “It reminds us of the early traction that Dropbox…and other apps
              up there had that have grabbed individuals and caused them to
              start using it and bring it to work and convince teams and
              colleagues to use it and it’s gradually taken over organizations,”
              said Index Partner Neil Rimer
            </p>
            <p>
              <a
                href="http://blogs.wsj.com/venturecapital/2014/07/24/digital-whiteboard-trello-spins-out-of-fog-creek-with-10-3m/"
                // target="_blank"
                // rel="noopener"
              >
                <img alt="about-wsj-logo" src={logoWsj}></img>
              </a>
            </p>
            <p>&nbsp;</p>
            <p>
              “The visual organizing software has amassed some 4.6 million
              registered users — now with one million monthly actives — turning
              their projects, whether household to-do lists or corporate
              realignment plans, into visual boards using its cloud-based
              software.”
            </p>
            <p>
              <a
                href="http://techcrunch.com/2014/07/24/trello-series-a/"
                // target="_blank"
                // rel="noopener"
              >
                <img alt="about-techcrunch-logo" src={logoTechcrunch}></img>
              </a>
            </p>
            <p>&nbsp;</p>
            <p>
              “I’ve been using it for five months now without fail, synthesizing
              everything from Covey and Allen that stuck, along with Carson and
              Babauta’s wisdom, to create the only task management system that’s
              ever really worked for me.”
            </p>
            <p>
              <a
                href="http://www.forbes.com/sites/timmaurer/2013/11/21/7-steps-to-creating-the-best-personal-task-management-system-with-trello/"
                // target="_blank"
                // rel="noopener"
              >
                <img alt="about-forbes-logo" src={logoForbes}></img>
              </a>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </section>

      <section id="upper-footer">
        <div className="upper-footer-container">
          <div className="upper-footer-main">
            <p>
              Looking for logos, screenshots, branding guidelines, Taco pics,
              and other Trello assets? Check out the
              <a
                href="https://www.atlassian.design/"
                title="branding page"
                // target="_blank"
                // rel="noopener"
              >
                branding page
              </a>
              .
            </p>
            <p>
              Media inquiries? Talk to us at
              <a href="mailto:press@atlassian.com" title="press@trello.com">
                press@atlassian.com
              </a>
              .
            </p>
            <p>
              Marketing or content inquiries? Reach us at
              <a href="mailto:editor@trello.com" title="editor@trello.com">
                editor@trello.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <footer className="About-Footer">
        <section id="footer-section1">
          <div className="footer-section1-container">
            <div className="footer-container-col1">
              <div className="footer-container-col1-svg-login">
                <svg
                  width="312"
                  height="64"
                  viewBox="0 0 312 64"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="LogoTrello__Logo-sc-11mphmv-0 dmCGMv"
                >
                  <linearGradient
                    id="trello-logo-gradient-white"
                    x1="49.999978%"
                    x2="49.999978%"
                    y1="99.983977%"
                    y2=".032046%"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity=".5"></stop>
                    <stop
                      offset=".15"
                      stop-color="#fff"
                      stop-opacity=".65"
                    ></stop>
                    <stop
                      offset=".3"
                      stop-color="#fff"
                      stop-opacity=".78"
                    ></stop>
                    <stop
                      offset=".46"
                      stop-color="#fff"
                      stop-opacity=".88"
                    ></stop>
                    <stop
                      offset=".62"
                      stop-color="#fff"
                      stop-opacity=".95"
                    ></stop>
                    <stop
                      offset=".8"
                      stop-color="#fff"
                      stop-opacity=".99"
                    ></stop>
                    <stop offset="1" stop-color="#fff"></stop>
                  </linearGradient>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="m55.75 0h-47.56c-4.09243 0-7.41 3.31757-7.41 7.41v47.59c0 4.09243 3.31757 7.41 7.41 7.41h47.56c4.09243 0 7.410027-3.31757 7.410027-7.41v-47.57c.0052867-1.96871715-.7730611-3.85862176-2.163282-5.25259496s-3.2780207-2.17740504-5.246745-2.17740504zm-28.1 45c0 1.3602476-1.0997635 2.4644929-2.46 2.47h-10.43c-1.3618668-.0054804-2.4645196-1.1081332-2.47-2.47v-31c.0054804-1.3618668 1.1081332-2.4645196 2.47-2.47h10.43c1.3602365.0055071 2.46 1.1097524 2.46 2.47zm24-14.21c-.0054804 1.3618668-1.1081332 2.4645196-2.47 2.47h-10.43c-1.3602365-.0055071-2.46-1.1097524-2.46-2.47v-16.79c0-1.3602476 1.0997635-2.4644929 2.46-2.47h10.43c1.3618668.0054804 2.4645196 1.1081332 2.47 2.47z"
                      fill="url(#trello-logo-gradient-white)"
                    ></path>
                    <g fill="#fff" fill-rule="nonzero">
                      <path d="m130.08 4.59v12.06h-14.3v45.75h-13.78v-45.75h-14.28v-12.06z"></path>
                      <path d="m147.62 62.4h-12.74v-45h12.74v8.62c2.41-6.07 6.28-9.67 13.17-9.23v13.32c-8.95-.7-13.17 1.5-13.17 8.71z"></path>
                      <path d="m230.4 62.76c-8.35 0-13.61-4.05-13.61-13.47v-49.29h12.83v47.53c0 2.73 1.81 3.7 4 3.7.631315.0130885 1.262786-.0169816 1.89-.09v11.09c-1.670462.4130783-3.39032.5914589-5.11.53z"></path>
                      <path d="m257.17 62.76c-8.35 0-13.6-4.05-13.6-13.47v-49.29h12.83v47.53c0 2.73 1.81 3.7 4 3.7.634638.0128631 1.269419-.0172055 1.9-.09v11.09c-1.677002.4145441-3.403668.5929326-5.13.53z"></path>
                      <path d="m268.47 39.88c0-13.9 8-23.41 21.78-23.41s21.61 9.53 21.61 23.41-7.92 23.58-21.61 23.58-21.78-9.77-21.78-23.58zm12.48 0c0 6.78 2.84 12.14 9.3 12.14s9.13-5.36 9.13-12.14-2.76-12-9.13-12-9.25 5.22-9.25 12z"></path>
                      <path d="m178 44c3.570328.3922021 7.1583.602474 10.75.63 9.75 0 18-2.62 18-12.06 0-9.17-8.47-16.07-18.66-16.07-13.72 0-22.5 10-22.5 23.85 0 14.43 7.58 23 24.71 23 5.085091.0521078 10.135127-.8466563 14.89-2.65v-10.83c-4.39 1.4-9.35 2.8-14.43 2.8-6.86 0-11.58-2.24-12.76-8.67zm9.83-17.68c3.61 0 6.51 2.45 6.51 5.8 0 4.32-4.56 5.66-9.79 5.66-2.230114-.0102442-4.456334-.1874058-6.66-.53.163357-2.1005717.762772-4.1440305 1.76-6 1.624894-3.0101722 4.749674-4.9072236 8.17-4.96z"></path>
                    </g>
                  </g>
                </svg>
                <a href="/login">
                  <span>Log In</span>
                </a>
              </div>
            </div>
            <div className="footer-container-col2">
              <ul>
                <li>
                  <a
                    href="/about"
                    data-uuid="7k1NZYpe6blkKmI7qo2UCv"
                    data-testid="ui-nav-link"
                    className="footer-ul-li-a"
                  >
                    <div className="footer-ul-li-a-first">
                      <p>About Trello</p>
                    </div>
                    <div className="footer-ul-li-a-secend">
                      <p>What’s behind the boards.</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.atlassian.com/company/careers/trello"
                    data-uuid="4r8SZSJfmA4x6EAO1jw9eK"
                    data-testid="ui-nav-link"
                    className="footer-ul-li-a"
                  >
                    <div className="footer-ul-li-a-first">
                      <p>Jobs</p>
                    </div>
                    <div className="footer-ul-li-a-secend">
                      <p>Learn about open roles on the Trello team.</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/platforms"
                    data-uuid="2ZWkwhk6wBiZzCA3bXUH4H"
                    data-testid="ui-nav-link"
                    className="footer-ul-li-a"
                  >
                    <div className="footer-ul-li-a-first">
                      <p>Apps</p>
                    </div>
                    <div className="footer-ul-li-a-secend">
                      <p>
                        Download the Trello App for your Desktop or Mobile
                        devices.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/integrations"
                    data-uuid="1L7cIxaeHVljtgIb9LZeTp"
                    data-testid="ui-nav-link"
                    className="footer-ul-li-a"
                  >
                    <div className="footer-ul-li-a-first">
                      <p class="UiNavLinkstyles__NavLinkTitle-sc-lgpipn-3 hPXyna">
                        Integrations
                      </p>
                    </div>
                    <div className="footer-ul-li-a-secend">
                      <p>
                        Get perspective with Trello and your favorite services.
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    data-uuid="7ptPwcapCPwGgn3DOehuCa"
                    data-testid="ui-nav-link"
                    className="footer-ul-li-a"
                  >
                    <div className="footer-ul-li-a-first">
                      <p>Contact us</p>
                    </div>
                    <div className="footer-ul-li-a-secend">
                      <p>Need anything? Get in touch and we can help.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="footer-section2">
          <div className="container-footer-section2">
            <div className="footer-section2-col1">
              <form className="footer-section2-form">
                {/* <img
                  src={logoLanguge}
                  alt="logo-languge"
                  style={{ width: 20, height: 20 }}
                ></img> */}
                <select data-testid="language-select">
                  <option value="en" data-uuid="en_language">
                    English
                  </option>
                  <option value="cs" data-uuid="cs_language">
                    Čeština
                  </option>
                  <option value="de" data-uuid="de_language">
                    Deutsch
                  </option>
                  <option value="en-AU" data-uuid="en-AU_language">
                    English (AU)
                  </option>
                  <option value="en-GB" data-uuid="en-GB_language">
                    English (UK)
                  </option>
                  <option selected="" value="en-US" data-uuid="en-US_language">
                    English (US)
                  </option>
                  <option value="es" data-uuid="es_language">
                    Español
                  </option>
                  <option value="fr" data-uuid="fr_language">
                    Français
                  </option>
                  <option value="it" data-uuid="it_language">
                    Italiano
                  </option>
                  <option value="hu" data-uuid="hu_language">
                    Magyar
                  </option>
                  <option value="nl" data-uuid="nl_language">
                    Nederlands
                  </option>
                  <option value="nb" data-uuid="nb_language">
                    Norsk (bokmål)
                  </option>
                  <option value="pl" data-uuid="pl_language">
                    Polski
                  </option>
                  <option value="pt-BR" data-uuid="pt-BR_language">
                    Português (Brasil)
                  </option>
                  <option value="fi" data-uuid="fi_language">
                    Suomi
                  </option>
                  <option value="sv" data-uuid="sv_language">
                    Svenska
                  </option>
                  <option value="vi" data-uuid="vi_language">
                    Tiếng Việt
                  </option>
                  <option value="tr" data-uuid="tr_language">
                    Türkçe
                  </option>
                  <option value="ru" data-uuid="ru_language">
                    Русский
                  </option>
                  <option value="uk" data-uuid="uk_language">
                    Українська
                  </option>
                  <option value="th" data-uuid="th_language">
                    ภาษาไทย
                  </option>
                  <option value="zh-Hans" data-uuid="zh-Hans_language">
                    中文 (简体)
                  </option>
                  <option value="zh-Hant" data-uuid="zh-Hant_language">
                    中文 (繁體)
                  </option>
                  <option value="ja" data-uuid="ja_language">
                    日本語
                  </option>
                </select>
              </form>
            </div>
            <div className="footer-section2-col2">
              <nav className="footer-section2-col2-nav">
                <ul>
                  <li>
                    <a
                      href="https://www.atlassian.com/legal/privacy-policy"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.atlassian.com/legal/cloud-terms-of-service"
                      // target="_blank"
                      // rel="noopener"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      data-uuid="01xSqDwG0I1Ey6IalhmrDm"
                      class="styled__ButtonTrigger-sc-rh40mk-0 eAuVGb"
                    >
                      Cookie Settings
                    </button>
                  </li>
                  <li>
                    <span>Copyright © 2021 Atlassian</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-section2-col3">
              <nav className="footer-section2-col3-nav">
                <a
                  href="https://www.instagram.com/trelloapp/"
                  title="Instagram"
                  // target="_blank"
                  // rel="noopener"
                >
                  <svg height="16" viewBox="0 0 16 16" width="16">
                    <path d="m7.9365485 4.00948853c2.1378796 0 3.8773322 1.74591892 3.8773322 3.89174604 0 2.14582713-1.7394526 3.89174603-3.8773322 3.89174603-2.13787961 0-3.87703593-1.7459189-3.87703593-3.89174603 0-2.14582712 1.73915632-3.89174604 3.87703593-3.89174604zm0 1.39893537c-1.36946341 0-2.48357803 1.11825631-2.48357803 2.49281067 0 1.37455435 1.11411462 2.49281063 2.48357803 2.49281063 1.36975965 0 2.483578-1.11825628 2.483578-2.49281063 0-1.37455436-1.11381835-2.49281067-2.483578-2.49281067zm4.1036506-2.58676679c.5095127 0 .9227511.41477468.9227511.92618144 0 .5117041-.4132384.92647878-.9227511.92647878-.5098089 0-.9230474-.41477468-.9230474-.92647878 0-.51140676.4132385-.92618144.9230474-.92618144zm-7.31121058-1.33500953c-1.79099628 0-3.24784704 1.46226656-3.24784704 3.25992082v6.3093323c0 1.7976543 1.45685076 3.2599209 3.24784704 3.2599209h6.28566818c1.7909963 0 3.2481433-1.4622666 3.2481433-3.2599209v-6.3093323c0-1.79765426-1.457147-3.25992082-3.2481433-3.25992082zm6.28566818 14.31582152h-6.28566818c-2.60740146 0-4.72898852-2.1291766-4.72898852-4.7465684v-6.3093323c0-2.61739173 2.12158706-4.7465684 4.72898852-4.7465684h6.28566818c2.6076977 0 4.7292848 2.12917667 4.7292848 4.7465684v6.3093323c0 2.6173918-2.1215871 4.7465684-4.7292848 4.7465684z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/trelloapp/"
                  title="Facebook"
                  // target="_blank"
                  // rel="noopener"
                >
                  <svg height="16" viewBox="0 0 8 16" width="8">
                    <path d="m1.61157724 7.96343677v7.63998533c0 .1097869.08892957.199047.19830983.199047h2.82684468c.10938027 0 .19799997-.0892601.19799997-.199047v-7.76438973h2.04940817c.10287322 0 .1887042-.07930781.19738025-.18225245l.1970704-2.33942478c.00991549-.1160071-.08118309-.21584163-.19738026-.21584163h-2.24647856v-1.65986573c0-.38876376.31419714-.70412892.70183089-.70412892h1.57935189c.10969013 0 .19830983-.08926016.19830983-.19904704v-2.33942478c0-.11009789-.0886197-.19904704-.19830983-.19904704h-2.66850667c-1.56602795 0-2.83583059 1.27421209-2.83583059 2.8460617v2.25545181h-1.41326741c-.10938026 0-.19830983.08926015-.19830983.19904704v2.33942477c0 .10978689.08892957.19904705.19830983.19904705h1.41326741z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/trello/"
                  title="LinkedIn"
                  // target="_blank"
                  // rel="noopener"
                >
                  <svg height="16" viewBox="0 0 16 16" width="16">
                    <g>
                      <path d="m3.36409209 14.2159091h-3.17642414v-9.59186348h3.17642414z"></path>
                      <path d="m1.77597952 3.31427557h-.0206972c-1.06590614 0-1.75528232-.7364835-1.75528232-1.65693805 0-.94122869.71047144-1.65733752 1.79707473-1.65733752 1.08660338 0 1.75528236.71610883 1.77597957 1.65733752 0 .92045455-.68937619 1.65693805-1.79707478 1.65693805z"></path>
                      <path d="m14.8176077 14.2159091h-3.1760261v-5.13141424c0-1.28959517-.4599158-2.16910068-1.6092078-2.16910068-.87744213 0-1.40004662.59326174-1.62970603 1.16594902-.08398287.20494499-.10448108.4913885-.10448108.7780318v5.3565341h-3.17622514s.04159346-8.69198329 0-9.59186348h3.17622514v1.35810992c.42210364-.65358665 1.17735263-1.58322973 2.86258281-1.58322973 2.0898209 0 3.6568382 1.37089396 3.6568382 4.31702764z"></path>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/trello"
                  title="Twitter"
                  // target="_blank"
                  // rel="noopener"
                >
                  <svg height="16" viewBox="0 0 20 16" width="20">
                    <path d="m19.0426025 1.89416831c-.6070809.27573601-1.2752956.44311943-1.9307418.55341384.3110854-.05242868.7695883-.61749334.9529894-.84623773.2797448-.34874781.512285-.74604069.6430647-1.17517915.0166377-.03339901.0294061-.07573031-.0042561-.10097375-.0417876-.0166995-.0688722-.00815557-.1021475.00854393-.7316699.39340928-1.4881028.67885432-2.293288.88080182-.0669375.01669951-.1164636 0-.1582512-.04194294-.0669375-.07573032-.1296189-.1468003-.2004257-.20583111-.3385569-.28894028-.7018769-.51574287-1.1112406-.68312628-.5374349-.22020046-1.1247829-.313407-1.7040054-.27534766-.5633588.03650589-1.1166575.1961221-1.616561.4582655-.5010643.26253176-.9479595.62797907-1.3039279 1.0691567-.36834997.45593533-.63996937.99459147-.77887445 1.56548154-.13426201.55108368-.12342819 1.09634195-.04140068 1.65325103.01238152.09242982.00425615.10485736-.07893213.09242982-3.15032069-.47069303-5.76165874-1.60198743-7.88121865-4.0265226-.09208749-.10524572-.14200046-.10524572-.21745029.00815558-.92745255 1.3953796-.47746201 3.63777365.68137003 4.73955264.15438196.1468003.31302007.29360061.48442661.42758501-.0626814.0128159-.83381738-.07106999-1.52099123-.42758501-.09170057-.05864245-.13813124-.02485508-.1462566.07961392-.00851229.15107227.00425614.289717.02476302.45321681.17798422 1.41479763 1.15418898 2.72318446 2.49100524 3.23349028.15863811.06718638.33391387.12582883.50532041.15534423-.3048947.06679802-.6183017.11495474-1.49158515.04621491-.10872514-.02097147-.15051274.03339901-.10872514.13825637.65622008 1.79539099 2.07274232 2.32977519 3.13368304 2.63424989.14200046.0248551.28438783.0248551.42677521.0582541-.00851229.0128159-.01702458.0128159-.02514994.0252434-.35209922.5386562-1.57206498.9394443-2.14045371 1.1386733-1.03308233.3623404-2.15825213.5254519-3.25053355.4174876-.17450193-.0256318-.21125954-.02369-.25885097 0-.04759143.0295154-.00580383.0714584.05029989.1172849.22170643.1468003.44689516.2769011.67672696.4027299.69375153.3689426 1.41690916.6629316 2.17295517.8722579 3.90481903 1.082361 8.30335081.2869985 11.23506041-2.63658 2.3025741-2.2963762 3.109307-5.46268009 3.109307-8.63286759 0-.12427538.1462566-.19301521.2329271-.25825979.5989556-.45166336 1.0752569-.99226131 1.5221521-1.59616202.1002128-.13553785.0941388-.25631799.0941388-.30563979 0-.00854393 0-.0166995 0-.0166995 0-.05087524.006074-.03534082-.0716974 0"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRcOkXoOrU6sN1yCz20VmQw"
                  title="Youtube"
                  // target="_blank"
                  // rel="noopener"
                >
                  <svg height="14" viewBox="0 0 20 14" width="20">
                    <path d="m12.6695433 7.17708642-4.43152592 2.43950617c-.19286329.10469136-.36604664-.03555555-.36604664-.25520987v-5.00740741c0-.22281482.17869373-.36266667.37155701-.25244445l4.46183305 2.56790124c.1971928.11259259.163737.39901234-.0358175.50765432zm7.0103835-2.87683951c0-2.37511111-1.9180056-4.30024691-4.2839264-4.30024691h-11.11168033c-2.3659208 0-4.28432007 1.9251358-4.28432007 4.30024691v5.22666667c0 2.37511112 1.91839927 4.30024692 4.28432007 4.30024692h11.11168033c2.3659208 0 4.2839264-1.9251358 4.2839264-4.30024692z"></path>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default About;
