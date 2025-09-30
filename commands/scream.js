import { outputText } from "../game.js";
import { findObject, screams, callPostTrigger, callPreTrigger } from "../utils.js";

export const scream = (verb, nouns, _preps, _orig) => {
  const id = nouns[0];
  const object = findObject(id);
  const randomIndex = Math.floor(Math.random() * screams.length);

  if (callPreTrigger(object, verb, object)) return;

  if (!object) {
    outputText.push(screams[randomIndex]);
    return;
  }

  outputText.push(screams[randomIndex]);
  outputText.push(`You scream at the <strong>${object.name}</strong>.`);

  if (callPostTrigger(object, verb, object)) return;
};
