import { Container } from "../../classes.js";

export const drawer = new Container(
  "drawer",
  "drawer1",
  ["drawer", "desk drawer", "wooden drawer"],
  "A wooden drawer built into the desk, made of the same polished oak as the desk itself.<br>" +
    "The drawer has a simple brass handle and slides open smoothly.<br>" +
    ["in", "inside"]
);


drawer.containText = "Inside the drawer, you find:";
drawer.isOpen = false;
drawer.isLocked = true;
drawer.keyName = "drawerKey1";
