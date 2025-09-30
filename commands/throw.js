import { outputText } from "../game.js";
import { player, rooms } from "../init.js";
import { findObject, validateObject, callPostTrigger, callPreTrigger } from "../utils.js";

export const _throw = (verb, nouns, preps, orig) => {
  const id = nouns[0];
  const targetId = nouns[1];
  const prep = preps[0];
  const object = findObject(id);
  const target = findObject(targetId);

  if (!validateObject(object, orig)) return;
  if (!validateObject(target, orig)) return;

  if (callPreTrigger(target, verb, object)) return;

  if (!player.isInInventory(object.uniqueKey)) {
    outputText.push(`You don't have the <strong>${object.name}</strong>.`);
    return;
  }

  if (!object.canThrow) {
    outputText.push(`You can't throw the <strong>${object.name}</strong>.`);
    return;
  }

  if (prep !== "at" && prep !== "to" && prep !== "on") {
    outputText.push(`Wrong syntax. Use "throw [object] at/to/on [target]".`);
    return;
  }

  outputText.push(`You throw the <strong>${object.name}</strong> at the <strong>${target.name}</strong>.`);

  player.removeFromInventory(object.uniqueKey);
  rooms[player.currentRoom.uniqueKey].addObjects(object);

  if (callPostTrigger(target, verb, object)) return;
};
