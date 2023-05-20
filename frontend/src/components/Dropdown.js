import { useRecoilState, useRecoilValue } from "recoil";
import {
  menuOpenState,
  backDropState,
  windowSizeState,
  isMobileState,
} from "../atoms/index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { isDeviceMobile } from "../hooks/index";

const Hamburger = ({ toggleMenu }) => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  isDeviceMobile();
  // const isMobile = useRecoilValue(isMobileState);
  const handleClick = () => {
    const isMenuOpen = toggleMenu();
    const hamburger = document.querySelector(".hamburger");
    if (!isMenuOpen) {
      hamburger.classList.toggle("open");
    } else {
      hamburger.classList.remove("open");
    }
  };
  console.log("Menu open", menuOpen);

  return (
    <button
      className="absolute bottom-[4px] hamburger hamburger3 cursor-pointer container "
      onClick={handleClick}
    >
      <span className={`bar bar1 mt-0.5 `}></span>
      <span className={`bar bar2 ${!menuOpen ? "hidden" : ""}`}></span>
      <span className={`bar bar3 ${!menuOpen ? "hidden" : ""}`}></span>
      <span className={`bar bar4 `}></span>
    </button>
  );
};

const Dropdown = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const backDrop = useRecoilValue(backDropState);
  const [menuState, setMenuState] = useRecoilState(menuOpenState);
  const windowWidth = useRecoilValue(windowSizeState);
  isDeviceMobile();
  const isMobile = useRecoilValue(isMobileState);
  const pages = ["/", "/skills", "/projects", "/contact"];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    return menuOpen;
  };

  // useEffect(() => {
  //   const setViewportMeta = (content) => {
  //     let metaTag = document.querySelector('meta[name="viewport"]');
  //     if (!metaTag) {
  //       metaTag = document.createElement("meta");
  //       metaTag.name = "viewport";
  //       document.head.appendChild(metaTag);
  //     }
  //     metaTag.content = content;
  //   };

  //   if (menuOpen) {
  //     setViewportMeta(
  //       "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  //     );
  //   } else {
  //     setViewportMeta("width=device-width, initial-scale=1.0");
  //   }

  //   return () => {
  //     setViewportMeta("width=device-width, initial-scale=1.0");
  //   };
  // }, [menuOpen]);

  const handleDirectLink = () => {
    setMenuOpen(!menuOpen);
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("open");
  };

  menuOpen
    ? (document.body.style.overflow = "scroll")
    : (document.body.style.overflow = "unset");

  // if (windowWidth > 1000 && menuState) {
  //   setMenuState(false);
  //   const hamburger = document.querySelector(".hamburger");
  //   hamburger.classList.remove("open");
  // }
  // blur background when menu is open
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="show-hamburger max-w-screen "
    >
      {
        <div>
          {menuOpen && (
            <div
              className={`fixed z-20 h-[70px] min-w-screen max-w-screen bg-gray-400 bg-opacity-10 backdrop-filter backdrop-blur-${backDrop} brightness-90`}
            ></div>
          )}
          <div
            className={`fixed z-20 right-[16px] -top-[11px] cursor-pointer `}
          >
            <Hamburger toggleMenu={toggleMenu} />
          </div>

          <div
            className={`${
              menuOpen ? "" : "hidden"
            } flex items-center justify-center mx-auto h-[100vh]`}
          >
            <ul className="drop-item mx-auto  duration-400  items-center text-center left-0 text-2xl cursor-pointer dropdown-flex mb-16">
              {pages.map((page, i) => {
                console.log("page", page);
                let firstLetter;
                let restOfWord;
                if (page !== "/") {
                  firstLetter = page[1].toUpperCase();
                  restOfWord = page.replace(/[^\w\s]/gi, "").slice(1);
                }
                return (
                  <Link
                    to={`${page}`}
                    key={page}
                    onClick={() => handleDirectLink()}
                    className="font-sans text-gray-200 duration-500 hover:opacity-90 pb-1 "
                  >
                    <div
                      className={`font-inter hover:bg-[#3f87a6] duration-500 hover:opacity-90 pb-1 mt-10`}
                    >
                      {page === "/" ? "Home" : firstLetter + restOfWord}
                    </div>
                    <span className="bg-[#00ff88] w-[120px] h-[3px] mt-2 block rounded-md dropdown-span"></span>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default Dropdown;
