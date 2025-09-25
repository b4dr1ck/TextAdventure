import { Container } from "../../classes.js";

export const kettle = new Container(
  "kettle",
  "kettle1",
  ["kettle", "metal kettle", "cauldron"],
  "A small black metal <strong>kettle</strong> sitting on the stove.<br>It looks old and slightly rusty, but still functional.",
  ["inside", "in", "into"]
);

kettle.isOpen = true;
