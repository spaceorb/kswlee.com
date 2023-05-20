import NavBar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import { useRecoilValue } from "recoil";
import { backDropState, menuOpenState } from "../atoms";
import gitHubIcon from "../icons/social/green-github.png";
import { Link, useLocation } from "react-router-dom";

const NavBarFull = () => {
  const backdrop = useRecoilValue(backDropState);
  const menuOpen = useRecoilValue(menuOpenState);

  return (
    <header className=" ">
      <div
        className={`nav-bar-full fixed z-20 h-[70px] min-w-full bg-black bg-opacity-20 backdrop-filter backdrop-blur-${backdrop} brightness-90 navbar-full`}
      ></div>
      <div className="">
        <Link to="/" className="">
          <div className="font-permanentmarker z-30 fixed  top-[22px] left-[14px] text-white ">
            {<h3>K S L</h3>}
          </div>
        </Link>
        <Dropdown />
      </div>

      {/* <div className="">
        <NavBar />
      </div> */}

      <div
        className={`z-20 fixed nav-bar-full flex items-center justify-center bottom-[0px] h-[70px] min-w-full  bg-black bg-opacity-20 backdrop-filter backdrop-blur-${backdrop} brightness-90 navbar-full`}
      >
        <a
          href="https://github.com/spaceorb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitHubIcon}
            alt="Github"
            className="cursor-pointer mb-0  w-9 h-9 "
          />
        </a>
      </div>
    </header>
  );
};

export default NavBarFull;
