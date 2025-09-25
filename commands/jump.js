import { outputText, commands } from "../game.js";
import { callTrigger } from "../utils.js";

export const jump = (verb, nouns, _preps, orig) => {
  const direction = nouns[0];
  if (callTrigger(direction, verb, direction)) return;

  if (direction) {
    commands.go(verb, [direction], []);
    return;
  }
  outputText.push("You jump up and down. Awesome!");
};
