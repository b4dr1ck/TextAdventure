import { player } from "../init.js";
import { outputText } from "../game.js";
import { callPreTrigger } from "../utils.js";

export const wait = (verb) => {
  const room = player.currentRoom;

  if (callPreTrigger(room, verb, room)) return;

  outputText.push("You wait for a while. Nothing happens.");
};
