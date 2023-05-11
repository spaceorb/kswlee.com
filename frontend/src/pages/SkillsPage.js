import htmlIcon from "../icons/technologies/html.png";
import cssIcon from "../icons/technologies/css.png";
import tailwindcssIcon from "../icons/technologies/tailwindcss.png";
import javascriptIcon from "../icons/technologies/javascript.png";
import typescriptIcon from "../icons/technologies/typescript.png";
import reactIcon from "../icons/technologies/reactjs.png";
import { ReactComponent as RecoilIcon } from "../icons/technologies/recoil.svg";
import nodeIcon from "../icons/technologies/nodejs.png";
import { ReactComponent as ExpressIcon } from "../icons/technologies/expressjs.svg";
import mongodbIcon from "../icons/technologies/mongodb.png";
import herokuIcon from "../icons/technologies/heroku.png";
import githubIcon from "../icons/technologies/github.png";
import photoshopIcon from "../icons/technologies/photoshop.png";
import discordapiIcon from "../icons/technologies/discordapi.png";
import { useLocation } from "react-router-dom";
import NavBarFull from "./NavBarFull";
import { HandleResize } from "../hooks";
import { menuOpenState, isMobileState } from "../atoms";
import { useRecoilValue } from "recoil";
import FooterFull from "./FooterFull";
import { useRef } from "react";
import { useFadeInOnScroll, isDeviceMobile } from "../hooks/index";

// import background from "../images/background.jpg";

const SkillsPage = () => {
  const location = useLocation().pathname;
  isDeviceMobile();

  const menuState = useRecoilValue(menuOpenState);
  const isMobile = useRecoilValue(isMobileState);
  const fadeInRef = useRef(null);
  const fadeInRef2 = useRef(null);

  useFadeInOnScroll(fadeInRef);
  useFadeInOnScroll(fadeInRef2);
  // const [windowWidth, setWindowWidth] = useRecoilState(windowSizeState);
  HandleResize();
  return (
    <div
      className={`${location === "/skills" && "gradient-card"} overflow-hidden`}
    >
      <div className={`${location === "/skills"}`}>
        {location === "/skills" ? <NavBarFull /> : null}

        {!menuState && (
          <div className="overflow-y-hidden">
            {/* <div className=" flex overflow-y-scroll justify-center items-start mt-0 handle-smallest-height-pages bg-white"></div> */}

            <section
              className={` flex items-center justify-evenly ${
                location === "/skills"
                  ? "  items-center min-h-[fit] mt-11"
                  : "items-center justify-evenly sm-mainpage-skills-h"
              } `}
            >
              <div className="relative min-h-[fit]">
                {location === "/skills" && isMobile && (
                  <div className="w-[100%] mb-[44px] py-[2px] rounded-lg flex "></div>
                )}

                {location === "/skills" && !isMobile && (
                  <div
                    className={`nav-bar-full z-0 h-[70px] min-w-full `}
                  ></div>
                )}
                <div
                  ref={fadeInRef}
                  className={`my-0 py-0 ${
                    location === "/skills" ? "mt-0" : "mt-10"
                  } mb-8 text-[18px] px-6 text-white leading-6 max-w-[787px] text-start `}
                >
                  <p className="mb-0 px-2 py-0 text-white bg-gray-700 bg-opacity-0 text-start text-[30px] intro-card-header-sm-text ">
                    A bit about me<span className="text-[#00ff88]">:</span>
                  </p>
                  <div className="mt-[10px] py-[0.05px]"></div>
                  <div
                    className={`font-inter text-base bg-white bg-opacity-10 backdrop-filter backdrop-blur-[20px] w-fit p-[30px] leading-[26px] rounded-[10px] tracking-wide shadow-xl  md:p-[38px] intro-card-sm-text sm-skillpg-txt-14`}
                  >
                    <p>
                      <span className="text-[#00ff88]">
                        Over the past two years
                      </span>
                      , I have successfully developed and deployed a variety of
                      projects, showcasing my expertise in creating
                      mobile-friendly, responsive, and data-driven web
                      applications. As a proficient{" "}
                      <span className="text-[#00ff88]">MERN</span> stack
                      developer, I look forward to the opportunities where I can
                      contribute to a team's success and bring innovative
                      solutions to clients.
                    </p>
                  </div>{" "}
                </div>

                <div
                  ref={fadeInRef2}
                  className={` my-0 py-0 mt-12 ${
                    location === "/skills" ? "mb-16" : "mb-10"
                  } text-[18px] px-6 text-white leading-6 max-w-[787px] h-auto text-center  `}
                >
                  <p className="mt-10 px-2 text-white bg-gray-700 bg-opacity-0 text-end text-[30px] intro-card-header-sm-text ">
                    Technologies<span className="text-[#00ff88]">:</span>
                  </p>
                  <div className="mt-[10px] py-[0.05px]"></div>

                  <div
                    className={`flex flex-wrap items-center justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-[30px] w-100% h-auto rounded-[10px] tracking-wide shadow-xl  md:py-[40px] sm-padding `}
                  >
                    <div
                      className={`flex flex-wrap items-center justify-end mobile-icons`}
                    >
                      <img
                        src={htmlIcon}
                        alt="html"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[4px] w-[42px] h-[42px]`}
                      />
                      <img
                        src={cssIcon}
                        alt="css"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[4px] w-[42px] h-[42px]`}
                      />
                      <img
                        src={tailwindcssIcon}
                        alt="tailwindcss"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[8px] mx-1 w-auto h-[20px]`}
                      />

                      <img
                        src={javascriptIcon}
                        alt="javascript"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[6px] mx-1 w-auto h-[32px]`}
                      />
                      <img
                        src={typescriptIcon}
                        alt="typescript"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[5px] mx-[7px] w-[37.5px] h-[37.5px]`}
                      />
                      <img
                        src={reactIcon}
                        alt="reactjs"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[6px] -mx-[10px] w-auto h-[42px]`}
                      />
                      <RecoilIcon
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } ml-[8px] mt-[3px] w-auto h-[38px]`}
                      />
                      <img
                        src={nodeIcon}
                        alt="nodejs"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[6px] -mx-[10px] pl-[20px] pr-[12px] w-auto h-[42px]`}
                      />
                      <ExpressIcon
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mx-[8px] mt-[7px] w-[32px] h-[32px]`}
                      />
                      <img
                        src={mongodbIcon}
                        alt="mongoddb"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[6px] -ml-[20px] -mr-[20px] w-auto h-[36px]`}
                      />
                      <img
                        src={herokuIcon}
                        alt="heroku"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[5px] mx-[7px] w-[37.5px] h-[37.5px]`}
                      />
                      <img
                        src={githubIcon}
                        alt="github"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[5px] mx-[2px] w-[37.5px] h-[37.5px]`}
                      />
                      <img
                        src={discordapiIcon}
                        alt="github"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[8px] mx-[7px] w-auto h-[30px]`}
                      />
                      <img
                        src={photoshopIcon}
                        alt="photoshop"
                        className={`${
                          !isMobile &&
                          navigator.userAgent.indexOf("Safari") === -1 &&
                          "skills-icon"
                        } mt-[4px] ml-[4px] mr-[6px] w-[38px] h-[38px]`}
                      />
                    </div>

                    <div className="flex font-inter leading-[28px] text-[16px] justify-center items-center w-[100%] h-1/2 mt-8 intro-card-sm-text sm-skillpg-txt-12">
                      <ul className="w-[50%] text-center">
                        <li className="">HTML & CSS</li>
                        <li className="">Tailwind CSS</li>
                        <li className="">JavaScript</li>
                        <li className="">TypeScript</li>
                        <li className="">React.js</li>
                        <li className="">Redux</li>
                      </ul>
                      <ul className="w-[50%] text-center">
                        <li className="">Recoil.js</li>
                        <li className="">Node.js</li>
                        <li className="">MongoDB</li>
                        <li className="">Express.js</li>
                        <li className="">Socket.io</li>
                        <li className="">Jest</li>
                      </ul>
                      <ul className="w-[50%] text-center">
                        <li className="">RESTful APIs</li>
                        <li className="">Discord.js</li>
                        <li className="">Axios</li>
                        <li className="">Heroku</li>
                        <li className="">Github</li>
                        <li className="">Photoshop</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {location === "/skills" && !menuState && (
          <section className="relative w-full">
            <FooterFull />
          </section>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
