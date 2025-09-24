import { Room } from "../classes.js";

import { redDoor } from "../objects/crossroads/redDoor.js";

import { lightSwitch } from "../objects/kitchen/lightSwitch.js";
import { lamp } from "../objects/kitchen/lamp.js";

export const kitchen = new Room(
  "Kitchen",
  "kitchen",
  ["kitchen", "room", "kitchen room"],
  "You've entered the kitchen.<br" +
    "There are counters along the white walls with various kitchen utensils and appliances.<br>" +
    "A big cupboard hangs on the north wall, slightly ajar. It has a big lock on it.<br>" +
    "A large wooden table stands in the center, covered with a checkered tablecloth and some kitchen utensils, dishes and old ingredients on it.<br>" +
    "Around the table are several wooden chairs, some of them slightly askew.<br>" +
    "In the southwest corner, you see a cold fireplace with a kettle hanging above it.<br>" +
    "From the ceiling hangs a modern electric lamp, lights the room with a warm tone.<br>" +
    "In the east you find the red door where you came from. Next to it, a light switch on the wall."
);

kitchen.exits = {
  east: { destination: "crossroads", obstacle: redDoor },
};
kitchen.hidden = true;
kitchen.hiddenDescription =
  "It's too dark to see anything in the kitchen<br>" +
  "Only a light switch is visible on the wall next to the red door.";

kitchen.addObjects(lightSwitch, lamp);
