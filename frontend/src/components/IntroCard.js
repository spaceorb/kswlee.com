import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { menuOpenState } from "../atoms/index";
import { useNavigate } from "react-router-dom";
import downloadBtn from "../icons/navigation/download.svg";

const IntroCard = () => {
  const [textColor, setTextColor] = useState("#fff");
  const [mouseState, setMouseState] = useState(false);
  const menuState = useRecoilValue(menuOpenState);
  const navigate = useNavigate();

  const calculateBrightness = (color) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const timeId = setTimeout(
    () => (mouseState ? navigate("/projects") : null),
    800
  );

  const handleMouseDown = () => {
    setMouseState(true);
    setTextColor(calculateBrightness("#00ff88") > 128 ? "#000" : "#fff");
  };

  const handleMouseUp = () => {
    setMouseState(false);
    clearTimeout(timeId);
    setTextColor(calculateBrightness("#f75252") > 128 ? "#000" : "#fff");
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // div might need flex-wrap
  return (
    <div>
      {!menuState && (
        <div className="overflow-x-hidden">
          <div className="gradient-card2"></div>
          <div className="relative flex flex-col flex-wrap items-center justify-center mx-auto mt-0  bg-opacity-10 p-8  md:mb-0 sm-introcard">
            <h1 className=" text-4xl mb-[2px] first-letter:text-5xl text-gray-100 font-extrabold sm-med-text ">
              Kenneth Lee
            </h1>
            <div className="flex bold tracking-wider text-3xl text-gray-100 font-extrabold pb-4 sm-med-sm-text">
              <div className="full-stack-div-intro relative w-[176px] flex ml-[8px]">
                <p className="z-[5] absolute full-stack-txt">Full-Stack</p>
                <div className="green-block z-0 absolute top-[1px] right-[2px] w-[186px] h-[42px] bg-[#2ccb81] rotate-[3deg] px-4 pb-1"></div>{" "}
              </div>

              <p className="mx-1 ">Developer </p>
              {/* <span className="bg-[#00ff88] w-[170px] h-[3px] mt-1 block rounded-md sm-intro-bar"></span> */}
            </div>
            <div className="flex flex-col items-center w-[80%] justify-center h-fit mt-5">
              <button
                className="btn text-[12px] rounded-[50px] relative z-[5] h-fit"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
              >
                <p className=" text-shadow-sm font-inter text-color-change flex items-center justify-center ">
                  <b className="unselectable text-white text-[13px] transition-colors duration-1000 xs-text ">
                    View Projects
                  </b>
                </p>
              </button>
              <button
                className="btn text-[12px] rounded-[50px] relative z-[5]"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
              >
                <p className=" text-shadow-sm font-inter text-color-change flex items-center justify-center pr-[6px]">
                  <img src={downloadBtn} alt="download" className="w-[22px]" />{" "}
                  <b className="unselectable text-white text-[13px] transition-colors duration-1000 xs-text ">
                    Resume
                  </b>
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroCard;
