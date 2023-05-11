import { atom } from "recoil";

export const menuOpenState = atom({
  key: "menuOpenState",
  default: false,
});
export const weatherState = atom({
  key: "weatherData",
  default: null,
});
export const weatherIconState = atom({
  key: "weatherIconState",
  default: null,
});
export const windowSizeState = atom({
  key: "windowSize",
  default: null,
});
export const weatherNameState = atom({
  key: "weatherNameState",
  default: null,
});
export const backDropState = atom({
  key: "backDropState",
  default: "md",
});
export const showScrollToTopState = atom({
  key: "showScrollToTopState",
  default: false,
});
export const isMobileState = atom({
  key: "isMobileState",
  default: false,
});
export const project3IndexState = atom({
  key: "project3IndexState",
  default: 0,
});
export const project2IndexState = atom({
  key: "project2IndexState",
  default: 0,
});
export const project1IndexState = atom({
  key: "project1IndexState",
  default: 0,
});
