import { Equipment } from "../../classes.js";

export const glasses = new Equipment(
  "red glasses",
  "glasses1",
  ["glasses", "spectacles", "eyeglasses", "pair of glasses"],
  "A pair of sleek, modern glasses with thin red frames and clear lenses.<br>" +
    "The glasses have a minimalist design, with no visible screws or hinges.<br>" +
    "They look lightweight and comfortable to wear, with small nose pads and flexible arms that curve gently around the ears.<br>" +
    "The lenses are slightly reflective, giving them a high-tech appearance.<br>"
);
glasses.canTake = true;
glasses.canThrow = true;
glasses.sceneryDescription = "A pair of red glasses lie here.";