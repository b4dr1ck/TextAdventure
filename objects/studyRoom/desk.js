import { Surface } from "../../classes.js";

import { glasses } from "./glasses.js";

export const desk = new Surface(
  "desk",
  "desk1",
  ["desk", "table", "wooden desk", "large wooden desk"],
  "A large wooden desk made of polished oak, with intricate carvings along the edges.<br>" +
    "On the desk are scattered papers, an ink pot with a quill.<br>" +
    "The surface is slightly worn from years of use, but it still exudes a sense of elegance and sophistication.<br>",
    "There are also some drawers built into the desk.<br>",
  ["on", "onto"]
);

desk.containText = "You also find some other items on the desk:";
desk.addItems(glasses);