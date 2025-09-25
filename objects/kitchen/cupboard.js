import { Container } from "../../classes.js";

export const cupboard = new Container(
  "cupboard",
  "cupboard1",
  ["cupboard", "kitchen cupboard", "wooden cupboard"],
  "An old wooden cupboard mounted on the wall. It hast a sign on it that shows a flask and some letters: 'Potions'.<br>" +
    "The cupboard door is locked shut by a small golden padlock."
);

cupboard.isLocked = true;
cupboard.keyName = "goldenkey1";
