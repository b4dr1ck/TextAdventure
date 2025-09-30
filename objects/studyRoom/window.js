import { Lockable } from "../../classes.js";

export const window = new Lockable(
  "Window",
  "window3",
  ["window", "large window", "curtains", "closed curtains"],
  "A large window with closed curtains lets in a soft, diffused light.<br>" +
    "The curtains are made of heavy fabric, blocking out most of the outside view."
);

window.isOpen = false;

const openWindowTrigger = (window) => {
  return "You can't reach the window to open or close it. The desk before it is in the way.";
};

window.createPreTrigger("open", openWindowTrigger);
window.createPreTrigger("close", openWindowTrigger);
