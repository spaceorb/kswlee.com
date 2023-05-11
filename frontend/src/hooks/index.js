import { useRecoilState } from "recoil";
import { backDropState, windowSizeState, isMobileState } from "../atoms";
import { useEffect } from "react";

export const HandleResize = () => {
  /* eslint-disable */
  const [backdrop, setBackDrop] = useRecoilState(backDropState);
  const [windowWidth, setWindowWidth] = useRecoilState(windowSizeState);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 700) refreshBackDrop();
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // eslint-disable-next-line
  }, [windowWidth]);

  const refreshBackDrop = () => {
    setBackDrop("lg");
    setTimeout(() => {
      setBackDrop("md");
    }, 1);
  };
};

export const useFadeInOnScroll = (ref) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    if (ref.current) {
      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      ref.current.classList.add("fade-in");

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);
};

export const isDeviceMobile = () => {
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
};
