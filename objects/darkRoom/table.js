import { Surface } from "../../classes.js";
import { book } from "./book.js";

export const table = new Surface(
  "table",
  "table1",
  ["table", "desk", "old table"],
  "An old sturdy wooden <strong>table</strong>.<br>It has some scratches and cracks on the surface.",
  ["on", "on top of", "onto"]
);
table.containText = "On the table you see: ";
table.addItems(book);
