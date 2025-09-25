import { outputText } from '../game.js';
import { findObject,screams,callTrigger } from '../utils.js';

export const scream = (verb, nouns, _preps, _orig) => {
  const id = nouns[0];
  const object = findObject(id);
  const randomIndex = Math.floor(Math.random() * screams.length);

  if (!object) {
    outputText.push(screams[randomIndex]);
    return;
  }

  if (callTrigger(object, verb, object)) return;
  
  outputText.push(screams[randomIndex]);
  outputText.push(`You scream at the <strong>${object.name}</strong>.`);
};
