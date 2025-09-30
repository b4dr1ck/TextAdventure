import { Player } from "./classes.js";

import { darkRoom } from "./rooms/darkRoom.js";
import { hallway } from "./rooms/hallway.js";
import { crossroads } from "./rooms/crossroads.js";
import { kitchen } from "./rooms/kitchen.js";
import { studyRoom } from "./rooms/studyRoom.js";

// * player
const player = new Player(darkRoom);

//---------------------------------------------------------------------------------------------------
// * Add rooms to rooms list
const rooms = {};
rooms[darkRoom.uniqueKey] = darkRoom;
rooms[hallway.uniqueKey] = hallway;
rooms[crossroads.uniqueKey] = crossroads;
rooms[kitchen.uniqueKey] = kitchen;
rooms[studyRoom.uniqueKey] = studyRoom;

export { rooms, player };
