import { Surface } from "../../classes.js";
import { knife } from "./knife.js";
import { waterbottle } from "./waterbottle.js";

export const largeTable = new Surface(
  "large table",
  "largeTable1",
  [
    "large table",
    "table",
    "dining table",
    "wooden table",
    "dark table",
    "dishes",
    "ingredients",
    "tablecloth",
    "utensils",
  ],
  "A huge table made of dark wood. On it a checkered red and white tablecloth is spread.<br>" +
    "There are various kitchen utensils, dishes and old ingredients on it.",
  ["on", "on top of", "onto"]
);

largeTable.containText = "Some of them could be useful, like: ";
largeTable.addItems(knife, waterbottle);
