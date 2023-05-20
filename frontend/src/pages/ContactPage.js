import NavBarFull from "./NavBarFull";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { menuOpenState, isMobileState, windowSizeState } from "../atoms";
import { useRecoilValue } from "recoil";
import FooterFull from "./FooterFull";
import { useFadeInOnScroll, isDeviceMobile } from "../hooks/index";
import sendMessage from "../services/sendMessage";
import checkCircle from "../icons/navigation/checkCircle.svg";

const ContactPage = () => {
  const location = useLocation().pathname;
  const menuState = useRecoilValue(menuOpenState);
  const isMobile = useRecoilValue(isMobileState);
  const windowWidth = useRecoilValue(windowSizeState);

  const fadeInRefContact1 = useRef(null);
  const fadeInRefContact2 = useRef(null);
  useFadeInOnScroll(fadeInRefContact1);
  useFadeInOnScroll(fadeInRefContact2);
  isDeviceMobile();
  menuState
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;
    const greenCheck = document.getElementById("greenCheckCircle");
    const sendMessageBtn = document.getElementById("send-message-btn-label");
    const sentBtn = document.getElementById("sent-btn-label");
    const sendHeader = document.getElementById("send-msg-header");
    const sentHeader = document.getElementById("sent-msg-header");

    sendMessageBtn.classList.add("hidden");
    sendHeader.classList.add("hidden");
    sentBtn.classList.remove("hidden");
    sentHeader.classList.remove("hidden");
    greenCheck.classList.remove("hidden");
    setTimeout(() => {
      sendHeader.classList.remove("hidden");
      sendMessageBtn.classList.remove("hidden");
      sentHeader.classList.add("hidden");
      sentBtn.classList.add("hidden");
      greenCheck.classList.add("hidden");
    }, 3800);

    sendMessage(name, email, subject, message);
    e.target.reset();
  };
  return (
    <div
      className={`${
        location === "/contact" && "gradient-card"
      } overflow-hidden`}
    >
      {location === "/contact" ? <NavBarFull /> : null}
      {!menuState && (
        <div className="overflow-y-hidden">
          {/* <div className=" flex overflow-y-scroll justify-center items-start mt-0 handle-smallest-height-pages bg-white"></div> */}

          <section
            className={`flex items-center justify-evenly flex-col ${
              location === "/contact"
                ? " items-start min-h-[fit]"
                : "  items-center min-h-fit mt-[30px] sm-add-top-margin"
            } `}
          >
            {location === "/contact" &&
              (!isMobile || (windowWidth < 1000 && windowWidth > 420)) && (
                <div className={`nav-bar-full z-0 h-[70px] min-w-full `}></div>
              )}
            <div
              className={`flex items-center justify-between resize-contact-card handle-ccard-height  ${
                location === "/contact"
                  ? windowWidth <= 1000
                    ? "sm-handle-ccard-height mt-10"
                    : "sm-handle-ccard-height "
                  : windowWidth <= 1000
                  ? "sm-handle-ccard-height2 mt-10"
                  : "sm-handle-ccard-height2 "
              } `}
            >
              <div
                ref={fadeInRefContact1}
                className="flex flex-col justify-left items-left bg-white bg-opacity-10 h-fit rounded-[10px] backdrop-filter backdrop-blur-[20px] w-[340px] leading-6 tracking-wide mb-4 shadow-xl md:p-12 sm-text sm-lets-chat"
              >
                <div className="mb-5 w-[340px] sm-inner-lets-chat">
                  <p className={`font-inter text-gray-100`}>
                    <b className="text-[28px] contact-text-32  ">
                      Let's chat <span className="pl-[4px]">🙂</span>
                    </b>
                  </p>
                </div>

                <p className={`font-inter text-gray-100`}>
                  <b className="text-[22px] contact-text-22  ">Email:</b>
                </p>
                <div className="mt-[2px]">
                  <p className="text-[16px]  sm-text text-[#42e895]">
                    <b>ken.sw.lee@gmail.com</b>
                  </p>
                </div>
              </div>
              <div className="w-[55%] rm-width add-c-marginb-60  ">
                <div
                  ref={fadeInRefContact2}
                  className={`w-[393px] h-[480px] shadow-xl sm-contact-card bg-white bg-opacity-10 rounded-[10px] backdrop-blur-[20px] shrink-width-cp ${
                    windowWidth > 1000 && "ml-10"
                  } `}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="relative flex flex-col justify-between px-6 w-[100%]"
                  >
                    <p
                      className={`font-inter text-2xl text-white py-8 pl-[6px] sm-contact-msg-text ${
                        windowWidth <= 1000 && "text-center"
                      } `}
                    >
                      <b id="send-msg-header">Send me a message</b>{" "}
                      <b id="sent-msg-header" className="hidden">
                        Sent!
                      </b>{" "}
                      <span className="pl-[4px]">🚀</span>
                    </p>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Full name"
                      className="font-inter px-4 py-1 mb-3 bg-gray-200 rounded-3xl text-gray-900"
                      required
                    />

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      className="font-inter px-4 py-1 mb-3 bg-gray-200 rounded-3xl text-gray-900"
                      required
                    />

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="font-inter px-4 py-1 mb-3 bg-gray-200 rounded-3xl text-gray-900"
                    />

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="font-inter px-4 pt-1 mb-3 limited-resize bg-gray-200 rounded-3xl text-gray-900"
                      rows="5"
                      cols="50"
                      required
                    ></textarea>
                    <div className="flex items-center justify-center w-full mt-5 ">
                      <button
                        type="submit"
                        className="unselectable w-fit h-fit p-2 text-white text-[17px] rounded-3xl bg-[#42e895] hover:bg-[#51e5a0] bg-opacity-80 "
                      >
                        <b
                          id="send-message-btn-label"
                          className="p-2 font-inter sm-send-msg"
                        >
                          Send message
                        </b>
                        <b
                          id="sent-btn-label"
                          className="p-2 px-[34px] font-inter sm-send-msg hidden"
                        >
                          Sent! 🚀
                        </b>
                      </button>
                      <img
                        src={checkCircle}
                        id="greenCheckCircle"
                        alt="check circle"
                        className={`absolute hidden ${
                          isMobile ? "right-[56px]" : "right-20"
                        }`}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {location === "/contact" && !menuState && <FooterFull />}
    </div>
  );
};

export default ContactPage;
