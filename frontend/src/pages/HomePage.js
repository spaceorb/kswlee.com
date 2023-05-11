import HomeIntroPage from "./HomeIntroPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import FooterFull from "./FooterFull";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";
import { showScrollToTopState } from "../atoms";
import { menuOpenState, isMobileState } from "../atoms";

const HomePage = () => {
  const menuState = useRecoilValue(menuOpenState);
  const [showScrollToTop, setShowScrollToTop] =
    useRecoilState(showScrollToTopState);
  const [mobileState, setMobileState] = useRecoilState(isMobileState);

  useEffect(() => {
    function isMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileKeywords = [
        /android/i,
        /webos/i,
        /iphone/i,
        /ipad/i,
        /ipod/i,
        /blackberry/i,
        /windows phone/i,
      ];

      return mobileKeywords.some((keyword) => userAgent.match(keyword));
    }

    setMobileState(isMobile());
  }, []);

  useEffect(() => {
    let scrollTimer;

    const handleScrollAndTouch = () => {
      const btn = document.querySelector(".top-arw-btn-fade");
      if (window.pageYOffset > window.innerHeight / 4) {
        btn.classList.add("active");

        setShowScrollToTop(true);
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          setShowScrollToTop(false);
          btn.classList.remove("active");
        }, 2000);
      } else {
        setShowScrollToTop(false);
        btn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScrollAndTouch);

    return () => {
      window.removeEventListener("scroll", handleScrollAndTouch);
    };
  }, []); // add clicked state to dependency array

  const scrollToTop = (e) => {
    e.preventDefault();
    const btn = document.querySelector(".top-arw-btn-fade");
    if (showScrollToTop) {
      setShowScrollToTop(false);
      btn.classList.remove("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <div className="bg-[#1c1c1e]">
    <div className="bg-gray-200">
      <HomeIntroPage />

      {!menuState ? (
        <div>
          <div className="gradient-card">
            {<SkillsPage />}
            {<ProjectsPage />}
          </div>
          {<ContactPage />}
          {<FooterFull />}
          {
            <button
              onClick={scrollToTop}
              className={`fixed top-arw-btn-fade bottom-[92px] right-6 w-[42px] h-[42px] bg-[#f75252] text-white rounded-full focus:outline-none md-top-arrow-btn top-arrow-btn `}
            >
              ↑
            </button>
          }
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HomePage;
