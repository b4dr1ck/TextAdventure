import { Room } from "../classes.js";

import { woodenDoor } from "../objects/crossroads/woodenDoor.js";
import { shelves } from "../objects/studyRoom/shelves.js";
import { desk } from "../objects/studyRoom/desk.js";
import { vendingMachine } from "../objects/studyRoom/vendingMachine.js";
import { drawer } from "../objects/studyRoom/drawer.js";
import { walls } from "../objects/studyRoom/walls.js";
import { floor } from "../objects/studyRoom/floor4.js";
import { window } from "../objects/studyRoom/window.js";

export const studyRoom = new Room(
  "Study Room",
  "studyRoom",
  ["study", "study room", "room"],
  "You enter a cozy study room filled with shelves of books and a large wooden desk.<br>" +
    "Next to the desk is a vending machine stocked with various stuff<br>" +
    "A comfortable leather armchair sits in the corner next to a small reading lamp.<br>" +
    "The walls are adorned with framed maps and scholarly certificates.<br>" +
    "A large window above the desk with closed curtains lets in a soft, diffused light.<br>" +
    "The whole room doesn't fit to the rest of the building and seems more modern.<br>" +
    "To the west is the wooden door that leads back to the crossroads.<br>"
);

studyRoom.exits = {
  west: { destination: "crossroads", obstacle: woodenDoor },
};
studyRoom.addObjects(shelves, desk, vendingMachine, drawer, walls, floor, window);
