import { outputText } from '../game.js';
import { findObject, validateObject ,callTrigger} from '../utils.js';

export const knock = (verb, nouns, _preps, orig) => {
  const id = nouns[0];
  const object = findObject(id);

  if (!validateObject(object, orig)) return;
  if (callTrigger(object, verb, object)) return;

  outputText.push(`You knock on the <strong>${object.name}</strong>, but nobody answers.`);
};