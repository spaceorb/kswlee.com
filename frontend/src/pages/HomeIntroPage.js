import React from "react";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import IntroCard from "../components/IntroCard";
// import background from "../images/background.jpg";
import background from "../images/background.png";

import { HandleResize } from "../hooks";
import NavBarFull from "./NavBarFull";
import config from "../config";
import { useFadeInOnScroll } from "../hooks";
import { isMobileState, backDropState } from "../atoms/index";
// import gitHubIcon from "../icons/social/green-github.png";

import {
  menuOpenState,
  windowSizeState,
  weatherState,
  weatherIconState,
  weatherNameState,
} from "../atoms/index";
import weatherDataService from "../services/weatherData";

const HomeIntroPage = () => {
  /* eslint-disable */
  const [weather, setWeather] = useRecoilState(weatherState);
  const [weatherIcon, setWeatherIcon] = useRecoilState(weatherIconState);
  const [weatherName, setWeatherName] = useRecoilState(weatherNameState);
  const [menuState, setMenuState] = useRecoilState(menuOpenState);
  const [windowWidth, setWindowWidth] = useRecoilState(windowSizeState);
  const isMobile = useRecoilValue(isMobileState);
  const backdrop = useRecoilValue(backDropState);

  console.log("ISMOBILE?", isMobile);
  const videoRef = useRef();
  const fadeInRef = useRef(null);
  const weatherFadeInRef = useRef(null);
  useFadeInOnScroll(fadeInRef);
  useFadeInOnScroll(weatherFadeInRef);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2;
    }
  }, []);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await weatherDataService.getWeather();
        setWeatherIcon(response.current.condition.icon);
        setWeather(response.current.temp_f);
        console.log(
          "response.current.condition.text",
          response.current.condition.text
        );
        setWeatherName(
          response.current.condition.text.includes("Sunny") ||
            response.current.condition.text.includes("rain") ||
            response.current.condition.text.includes("Cloudy") ||
            response.current.condition.text.includes("cloudy") ||
            response.current.condition.text.includes("Mist") ||
            response.current.condition.text.includes("Overcast")
            ? true
            : false
        );
      } catch (error) {
        console.error(error);
        // Handle error and set a default value
        setWeatherIcon(defaultWeatherIcon);
        setWeather(defaultWeatherValue);
        setWeatherName(defaultWeatherName);
      }
    };

    fetchWeather();
  }, [weather]);

  // menuState
  //   ? (document.body.style.overflow = "")
  //   : (document.body.style.overflow = "unset");

  HandleResize();

  console.log("usePublicUrl", config.usePublicUrl);

  return (
    <div className={`relative`}>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden w-[100%] mobile-bg-shift "
        style={{
          backgroundImage: `url(${background}`,
          backgroundSize: "cover",
        }}
      ></div>
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden h-[100vh] mobile-bg-shift"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video> */}

      <div className="relative">
        <NavBarFull />
        <div ref={weatherFadeInRef}>
          {!menuState && (
            <div className="">
              {weatherName ? (
                <div
                  className={`absolute mx-auto  ${
                    isMobile ? "right-2 top-[78px] " : "right-3 top-[84px] "
                  } w-[88px] h-12 rounded-[10px] bg-black backdrop-blur-md bg-opacity-20`}
                ></div>
              ) : (
                <div
                  className={`absolute mx-auto   ${
                    isMobile ? "right-2 top-[78px] " : "right-3 top-[86px] "
                  } w-[76px] h-12 rounded-[10px] bg-black backdrop-blur-md bg-opacity-20`}
                ></div>
              )}

              {weatherName ? (
                <img
                  src={weatherIcon}
                  alt="weathericon"
                  className={`absolute ${
                    isMobile
                      ? "right-[52px] top-[84px]"
                      : "right-[56px] top-[90px]"
                  } w-9 h-9 z-10`}
                />
              ) : (
                <img
                  src={weatherIcon}
                  alt="weathericon"
                  className={`absolute ${
                    isMobile
                      ? "right-[48px] top-[83px]"
                      : "right-[52px] top-[91px]"
                  }  w-9 h-9 z-10`}
                />
              )}

              <p
                className={`absolute  ${
                  isMobile
                    ? "right-[18px] top-[92px]"
                    : "right-[24px] top-[99px]"
                } font-merriweather text-[13px] text-gray-100 ml-2 z-10`}
              >
                {Math.round(weather)}° F
              </p>
            </div>
          )}
        </div>
        <div ref={fadeInRef}>
          {" "}
          {!menuState && (
            <section
              className={` flex justify-evenly items-center min-h-screen mt-0  handle-smallest-height `}
            >
              <IntroCard className="" />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeIntroPage;
