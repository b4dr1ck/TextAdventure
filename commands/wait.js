import { player } from "../init.js";
import { outputText } from "../game.js";
import { callTrigger } from "../utils.js";

export const wait = (verb) => {
    const room = player.currentRoom;

    if (callTrigger(room, verb, room)) return;

    outputText.push("You wait for a while. Nothing happens.");
  };