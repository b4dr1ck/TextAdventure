import { Surface } from "../../classes.js";
import { book } from "./book.js";

export const pedestal = new Surface(
  "pedestal",
  "pedestal1",
  ["pedestal", "stand", "old pedestal"],
  "An old sturdy wooden dark <strong>pedestal</strong>, fixed to the ground.",
  ["on", "on top of", "onto"]
);
pedestal.containText = "On the table you see: ";
pedestal.addItems(book);
