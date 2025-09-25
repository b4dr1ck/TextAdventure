import { Room } from "../classes.js";

import { redDoor } from "../objects/crossroads/redDoor.js";
import { lamp } from "../objects/kitchen/lamp.js";
import { shelves } from "../objects/kitchen/shelves.js";
import { cupboard } from "../objects/kitchen/cupboard.js";
import { largeTable } from "../objects/kitchen/largeTable.js";
import { chairs } from "../objects/kitchen/chairs.js";
import { rat } from "../objects/kitchen/rat.js";
import { goldCoin } from "../objects/kitchen/goldcoin.js";
import { fireplace } from "../objects/kitchen/fireplace.js";
import { kettle } from "../objects/kitchen/kettle.js";

export const kitchen = new Room(
  "Kitchen",
  "kitchen",
  ["kitchen", "room", "kitchen room"],
  "You are in the kitchen.<br>" +
    "There are may shelves along the white walls with various kitchen utensils and appliances.<br>" +
    "A big cupboard hangs on the north wall, slightly ajar. It has a big lock on it.<br>" +
    "A large wooden table stands in the center, covered with a checkered tablecloth and some kitchen utensils, dishes and old ingredients on it.<br>" +
    "Around the table are several wooden chairs, some of them slightly askew.<br>" +
    "In the southwest corner, you see a cold fireplace with a kettle hanging above it.<br>" +
    "From the ceiling hangs a modern electric lamp, lights the room with a warm tone.<br>" +
    "In the east you find the red door where you came from.<br>"
);

kitchen.exits = {
  east: { destination: "crossroads", obstacle: redDoor },
};

kitchen.addObjects(lamp, shelves, cupboard, largeTable, chairs, rat, goldCoin, fireplace, kettle);
