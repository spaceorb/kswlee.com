import { menuOpenState } from "../atoms/index";
import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";

const NormalMenu = () => {
  const location = useLocation().pathname;

  const handleCurrentLinkStyle = () => {
    console.log("location", location);
    if (location === "/") {
      return "";
    } else if (location === "/skills") {
      return "translate-x-[7rem]";
    } else if (location === "/projects") {
      return "translate-x-[14rem]";
    } else if (location === "/contact") {
      return "translate-x-[21rem]";
    }
  };

  return (
    <div className="fixed z-10 top-[24px] flex show-navbar transform-tr">
      <ul className="flex show-navbar nav-list text-[15px]">
        <Link
          to="/"
          className="nav-item mx-4 text-white hover:text-[#3cd08b] duration-500 cursor-pointer"
        >
          <div className="nav-link font-inter "> Home </div>
          {/* <div className="active"></div> */}
        </Link>
        <Link
          to="/skills"
          className="nav-item mx-4 text-white  hover:text-[#3cd08b] duration-500 cursor-pointer"
        >
          <div className="nav-link font-inter "> Skills </div>
          {/* <div className="active"></div> */}
        </Link>
        <Link
          to="/projects"
          className="nav-item mx-4 text-white  hover:text-[#3cd08b] duration-500 cursor-pointer"
        >
          <div className="nav-link sm-nav-link font-inter "> Projects </div>
          {/* <div className="active"></div> */}
        </Link>
        <Link
          to="/contact"
          className="nav-item mx-4 text-white hover:text-[#3cd08b] duration-500 cursor-pointer"
        >
          <div className="nav-link font-inter "> Contact </div>
          {/* <div className="active"></div> */}
        </Link>
        <div className={`nav-active ${handleCurrentLinkStyle()}`}></div>
      </ul>
    </div>
  );
};

const NavBar = () => {
  const menuState = useRecoilValue(menuOpenState);
  console.log(menuState);

  return (
    <div className="flex justify-center">
      <div
        className={`${
          menuState ? "block" : "absolute"
        } md:flex md:items-center  w-full`}
      ></div>
      {/* <div className="flex items-center justify-between">
        hiidsfisfkdafskldfasjkl
      </div> */}
      <NormalMenu />
    </div>
  );
};

export default NavBar;
