import NavBarFull from "./NavBarFull";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  menuOpenState,
  project1IndexState,
  project2IndexState,
  project3IndexState,
} from "../atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import RegButton from "../components/RegButton";
import FooterFull from "./FooterFull";
import rightArw from "../icons/navigation/rightArw.svg";
import leftArw from "../icons/navigation/leftArw.svg";

import ProjectOne from "../images/project1.jpeg";
import ProjectOneA from "../images/project1a.jpeg";
import ProjectTwo from "../images/project2.png";
import ProjectTwoA from "../images/project2a.png";
import ProjectThree from "../images/project3.jpeg";
import ProjectThreeA from "../images/project3a.jpeg";
import ProjectThreeB from "../images/project3b.jpeg";
import ProjectFour from "../images/project4.png";

import { useFadeInOnScroll, isDeviceMobile } from "../hooks";

const handleTechBtn = (num) => {
  const projectToHandle = document.querySelector(`.project-${num}`);
  const projectTech = document.querySelector(`.project-tech-${num}`);

  if (projectToHandle) {
    projectToHandle.classList.toggle("revealTech");
  } else if (projectTech) {
    projectTech.classList.toggle("addMarginOnClick");
  }
};

const ProjectsPage = () => {
  const [project1Index, setProject1Index] = useRecoilState(project1IndexState);
  const [project2Index, setProject2Index] = useRecoilState(project2IndexState);
  const [project3Index, setProject3Index] = useRecoilState(project3IndexState);
  const location = useLocation().pathname;
  const menuState = useRecoilValue(menuOpenState);

  const fadeInProjectTitle = useRef(null);
  const fadeInRef1 = useRef(null);
  const fadeInRef2 = useRef(null);
  const fadeInRef3 = useRef(null);
  const fadeInRef4 = useRef(null);
  const diamondFadeRef = useRef(null);
  useFadeInOnScroll(fadeInProjectTitle);
  useFadeInOnScroll(fadeInRef1);
  useFadeInOnScroll(fadeInRef2);
  useFadeInOnScroll(fadeInRef3);
  useFadeInOnScroll(fadeInRef4);
  useFadeInOnScroll(diamondFadeRef);
  isDeviceMobile();

  const project1Images = [ProjectOne, ProjectOneA];
  const handleProject1Index = (direction) => {
    if (direction === "left") {
      if (project1Index === 0) {
        setProject1Index(project1Images.length - 1);
      } else {
        setProject1Index(project1Index - 1);
      }
    } else if (direction === "right") {
      if (project1Index === project1Images.length - 1) {
        setProject1Index(0);
      } else {
        setProject1Index(project1Index + 1);
      }
    }
  };

  const project2Images = [ProjectTwo, ProjectTwoA];
  const handleProject2Index = (direction) => {
    if (direction === "left") {
      if (project2Index === 0) {
        setProject2Index(project2Images.length - 1);
      } else {
        setProject2Index(project2Index - 1);
      }
    } else if (direction === "right") {
      if (project2Index === project2Images.length - 1) {
        setProject2Index(0);
      } else {
        setProject2Index(project2Index + 1);
      }
    }
  };

  const project3Images = [ProjectThree, ProjectThreeA, ProjectThreeB];
  const handleProject3Index = (direction) => {
    if (direction === "left") {
      if (project3Index === 0) {
        setProject3Index(project3Images.length - 1);
      } else {
        setProject3Index(project3Index - 1);
      }
    } else if (direction === "right") {
      if (project3Index === project3Images.length - 1) {
        setProject3Index(0);
      } else {
        setProject3Index(project3Index + 1);
      }
    }
  };
  menuState
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  return (
    <div
      className={`${
        location === "/projects" && "gradient-card"
      } overflow-hidden`}
    >
      {location === "/projects" ? <NavBarFull /> : null}
      {!menuState && (
        <div className="overflow-y-hidden">
          <section
            className={`  my-0 py-0 px-8 flex flex-col items-center justify-center leading-[29px] ${
              location === "/projects"
                ? "  items-center min-h-screen-80 handle-projectpg-resize mt-[110px] sm-skills-mt-100"
                : " items-start min-h-fit pb-10"
            } `}
          >
            <p
              ref={fadeInProjectTitle}
              className={` ${
                location === "/projects" ? "mb-0" : "mb-[1px]"
              } px-2 py-0 text-white bg-gray-700 bg-opacity-0 text-center text-[30px] intro-card-header-sm-text z-50`}
            >
              Projects<span className="text-[#00ff88]">:</span>
            </p>
            <div
              className={`flex flex-wrap justify-evenly mx-4 ${
                location === "/projects" ? "mb-12" : ""
              }`}
            >
              <div
                ref={fadeInRef1}
                className=" w-[48%] flex flex-col justify-between items-center mx-2 project mt-2 mb-4 z-0"
              >
                <div
                  className={`bg-opacity-10  bg-white backdrop-filter shadow-xl backdrop-blur-[20px] rounded-[10px] z-0 text-white`}
                >
                  <img
                    src={ProjectFour}
                    alt={"ticket exchange marketplace web app"}
                    className="rounded-t-[10px] z-0 "
                  />

                  <div className="flex flex-col items-center justify-evenly">
                    <div className="font-inter text-[17px] my-2 mt-10 h-[20px] flex items-center justify-center full-stack-div relative w-[160px]">
                      <p className="z-[5] absolute full-stack-txt-1 top-[-12px]">
                        stubmarket.io
                      </p>
                      <div className="green-block z-0 absolute top-[-19px]  w-[160px] h-[40px] bg-[#2ccb81] -rotate-[3deg] px-2 pb-1"></div>{" "}
                    </div>

                    <div className="font-inter text-sm my-2 text-center px-4">
                      <p>
                        Ticket Exchange Marketplace{" "}
                        {window.innerWidth < 1300 ? "" : "Web Application"}
                      </p>
                      {
                        <p>
                          {window.innerWidth < 1300 ? "Web Application" : ""}
                        </p>
                      }
                    </div>

                    <div className=" mt-2 px-10 project-1 max-w-[500px] top-[10px]">
                      <p className="text-center text-sm">
                        Technologies<span className="text-[#00ff88]">:</span>{" "}
                        React.js, Redux, TypeScript, Material UI, Tailwind CSS,
                        Node.js, MongoDB, Express.js, GraphQL, Microservices,
                        CI/CD, Jest, Cypress, Heroku, Photoshop
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center w-[340px] mt-5 mb-8">
                      <img
                        src={leftArw}
                        alt="left arrow"
                        className="cursor-pointer"
                      />

                      <RegButton
                        name={"Tech"}
                        onClick={() => handleTechBtn(1)}
                      />
                      <RegButton name={"Link"} />
                      <RegButton name={"Code"} />
                      <img
                        src={rightArw}
                        alt="right arrow"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={fadeInRef2}
                className=" w-[48%] flex flex-col justify-between items-center mx-2 project mt-2 mb-4"
              >
                <div
                  className={`bg-opacity-10  bg-white backdrop-filter shadow-xl backdrop-blur-[20px] rounded-[10px] z-0 text-white`}
                >
                  <img
                    src={`${project3Images[project3Index]}`}
                    alt={"portfolio project"}
                    className="rounded-t-[10px] z-0"
                  />

                  <div className="flex flex-col items-center justify-evenly">
                    <div className="font-inter text-[17px] my-2 mt-10 h-[20px] flex items-center justify-center full-stack-div relative w-[160px]">
                      <p className="z-[5] absolute full-stack-txt-2 top-[-12px]">
                        draftbot.net
                      </p>
                      <div className="green-block z-0 absolute top-[-19px]  w-[160px] h-[40px] bg-[#2ccb81] -rotate-[3deg] px-2 pb-1"></div>{" "}
                    </div>
                    <div className="font-inter text-sm my-2 text-center">
                      <p>
                        Chatbot-Integrated Messaging{" "}
                        {window.innerWidth < 1300 ? "" : "Web Application"}
                      </p>
                      {
                        <p>
                          {window.innerWidth < 1300 ? "Web Application" : ""}
                        </p>
                      }
                    </div>

                    <div className=" mt-2 px-10 project-2 top-[10px] max-w-[500px]">
                      <p className="text-center text-sm">
                        Technologies<span className="text-[#00ff88]">:</span>{" "}
                        React.js, Recoil.js, JavaScript, Tailwind CSS,
                        Socket.io, Node.js, MongoDB, Express.js, Heroku,
                        Photoshop
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center w-[340px] mt-5 mb-8">
                      <img
                        src={leftArw}
                        alt="left arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject3Index("left")}
                      />
                      <RegButton
                        name={"Tech"}
                        onClick={() => handleTechBtn(2)}
                      />
                      <a
                        href="https://www.draftbot.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RegButton name={"Link"} />
                      </a>
                      <RegButton name={"Code"} />
                      <img
                        src={rightArw}
                        alt="right arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject3Index("right")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={fadeInRef3}
                className=" w-[48%] flex flex-col justify-between items-center mx-2 project mt-2 mb-4"
              >
                <div
                  className={`bg-opacity-10  bg-white backdrop-filter shadow-xl backdrop-blur-[20px] rounded-[10px] z-0 text-white`}
                >
                  <img
                    src={`${project2Images[project2Index]}`}
                    alt={"portfolio project"}
                    className="rounded-t-[10px] z-0"
                  />
                  <div className="flex flex-col items-center justify-evenly">
                    <div className="font-inter text-[17px] my-2 mt-10 h-[20px] flex items-center justify-center full-stack-div relative w-[160px]">
                      <p className="z-[5] absolute full-stack-txt-3 top-[-12px]">
                        discord bot
                      </p>
                      <div className="green-block z-0 absolute top-[-19px]  w-[160px] h-[40px] bg-[#2ccb81] -rotate-[3deg] px-2 pb-1"></div>{" "}
                    </div>
                    <div className="font-inter text-sm my-2 text-center">
                      <p>MMR-based Discord Bot</p>
                    </div>

                    <div className=" mt-2 px-10 project-3 max-w-[500px] top-[10px]">
                      <p className="text-center text-sm">
                        Technologies<span className="text-[#00ff88]">:</span>{" "}
                        Node.js, MongoDB, Discord.js, QuickCharts.io, Heroku,
                        Photoshop
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center w-[340px] mt-5 mb-8">
                      <img
                        src={leftArw}
                        alt="left arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject2Index("right")}
                      />
                      <RegButton
                        name={"Tech"}
                        onClick={() => handleTechBtn(3)}
                      />
                      <a
                        href="https://discord.com/api/oauth2/authorize?client_id=881341335355920415&permissions=28033184955505&scope=bot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RegButton name={"Link"} />
                      </a>
                      <a
                        href="https://github.com/spaceorb/discordBot"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RegButton name={"Code"} />
                      </a>
                      <img
                        src={rightArw}
                        alt="right arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject2Index("right")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={fadeInRef4}
                className=" w-[48%] flex flex-col justify-between items-center mx-2 project mt-2 mb-4"
              >
                <div
                  className={`bg-opacity-10  bg-white backdrop-filter shadow-xl backdrop-blur-[20px] rounded-[10px] z-0 text-white`}
                >
                  <img
                    src={`${project1Images[project1Index]}`}
                    alt={"portfolio project"}
                    className="rounded-t-[10px] z-0"
                  />
                  <div className="flex flex-col items-center justify-evenly">
                    <div className="font-inter text-[17px] my-2 mt-10 h-[20px] flex items-center justify-center full-stack-div relative w-[160px]">
                      <p className="z-[5] absolute full-stack-txt-3 top-[-12px]">
                        kswlee.com
                      </p>
                      <div className="green-block z-0 absolute top-[-19px]  w-[160px] h-[40px] bg-[#2ccb81] -rotate-[3deg] px-2 pb-1"></div>{" "}
                    </div>

                    <div className="font-inter text-sm my-2 text-center">
                      <p>Personal Portfolio Website</p>
                    </div>

                    <div className=" mt-2 px-10 project-4 max-w-[500px] top-[10px]">
                      <p className="text-center text-sm">
                        Technologies<span className="text-[#00ff88]">:</span>{" "}
                        React.js, Recoil.js, JavaScript, Tailwind CSS, MongoDB,
                        Express.js, Weather API, Axios, Heroku, Photoshop
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-between items-center w-[340px] mt-5 mb-8">
                      <img
                        src={leftArw}
                        alt="left arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject1Index("left")}
                      />
                      <RegButton
                        name={"Tech"}
                        onClick={() => handleTechBtn(4)}
                      />
                      <a
                        href="https://www.kswlee.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RegButton name={"Link"} />
                      </a>

                      <a
                        href="https://github.com/spaceorb/kswlee.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RegButton name={"Code"} />
                      </a>
                      <img
                        src={rightArw}
                        alt="right arrow"
                        className="cursor-pointer"
                        onClick={() => handleProject1Index("right")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {location === "/projects" && !menuState && <FooterFull />}
    </div>
  );
};

export default ProjectsPage;
