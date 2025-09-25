import { outputText } from "../game.js";
import { player } from "../init.js";
import { findObject, validateObject, callTrigger } from "../utils.js";

export const attack = (verb, nouns, preps, orig) => {
  const id1 = nouns[0];
  const id2 = nouns[1];
  const object1 = findObject(id1);
  const object2 = findObject(id2);
  const prep = preps[0];

  if (!validateObject(object1, orig)) return;
  if (!validateObject(object2, orig)) return;

  if (!player.isInInventory(object2.uniqueKey)) {
    outputText.push(`You don't have the <strong>${object2.name}</strong>.`);
    return;
  }

  if (prep !== "with") {
    outputText.push(`Wrong syntax. Use "attack [object1] with [object2]".`);
    return;
  }

  if (callTrigger(object1, verb, object2)) return;

  if (!object1.canBeAttacked) {
    outputText.push(`You can't attack the <strong>${object1.name}</strong>`);
  }

  if (object2.attack(object1)) {
    outputText.push(`You attack the <strong>${object1.name}</strong> with your <strong>${object2.name}</strong>!`);
  }
};
