import { Surface } from "../../classes.js";

export const shelves = new Surface(
  "book shelves",
  "bookShelves1",
  ["shelves", "shelf", "bookcase", "book case", "bookshelf", "book shelf"],
  "A large wooden bookshelf filled with numerous books of various sizes and colors.<br>" +
    "The shelves are neatly organized, with some books standing upright while others are stacked horizontally.<br>" +
    "A few decorative items, such as small sculptures and framed photographs,<br>" +
    "are interspersed among the books, adding a personal touch to the collection.<br>",
  ["on", "onto"]
);
shelves.containText = "You also discover some other items on the shelves:";
