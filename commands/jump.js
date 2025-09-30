import { outputText, commands } from "../game.js";
import { callPreTrigger } from "../utils.js";

export const jump = (verb, nouns, _preps, orig) => {
  const direction = nouns[0];
  if (callPreTrigger(direction, verb, direction)) return;

  if (direction) {
    commands.go(verb, [direction], []);
    return;
  }
  outputText.push("You jump up and down. Awesome!");
};
