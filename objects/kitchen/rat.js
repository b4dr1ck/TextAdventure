import { GameObject } from "../../classes.js";
import { goldCoin } from "./goldcoin.js";
import { player } from "../../init.js";

export const rat = new GameObject(
  "rat",
  "rat1",
  ["rat", "large rat", "big rat", "fat rat"],
  "A large fat rat with matted fur and beady eyes. It looks hungry and a bit aggressive."
);

rat.sceneryDescription = "A <strong>large rat</strong> sits in the corner and gnawing on something.";
rat.hidden = true;

const ratBanishTrigger = (object) => {
  rat.hidden = true;
  goldCoin.hidden = false;
  return "You successfully shoo the rat away.<br>It leaves something behind on the floor. Something shiny.";
};

const ratBiteTrigger = (object) => {
  player.adjustHealth(-25);
  return "As you get closer the rat bites you!<br>You quickly pull your hand back, but it still stings.";
};

rat.createPreTrigger("scream", ratBanishTrigger);
rat.createPreTrigger("throw", ratBanishTrigger);
rat.createPreTrigger("attack", ratBiteTrigger);
rat.createPreTrigger("take", ratBiteTrigger);
rat.createPreTrigger("smell", ratBanishTrigger);
