import gitHubIcon from "../icons/social/github.png";
import emailIcon from "../icons/social/email.png";

const FooterFull = () => {
  return (
    <footer
      className={`relative w-[100%] h-[300px] py-0 bg-gray-800 footer-full flex items-center justify-center`}
    >
      <div className="flex items-center justify-center flex-col mb-16 text-white">
        <div className="flex mb-4">
          <a
            href="https://github.com/spaceorb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHubIcon}
              alt="Github"
              className="cursor-pointer mt-1 mr-1 w-8 h-8 "
            />
          </a>

          <img
            src={emailIcon}
            alt="Github"
            className="cursor-pointer mt-1 w-8 h-8 ml-1"
          />
        </div>

        <div className="mb-2 text-sm font-inter">
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Weather API">
            WeatherAPI.com
          </a>
        </div>

        <div className="text-sm font-inter">
          <p>Copyright ©2023 Kenneth Lee. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFull;
