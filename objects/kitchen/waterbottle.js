import { Consumable } from "../../classes.js";
import { player } from "../../init.js";

export const waterbottle = new Consumable(
  "water bottle",
  "waterbottle1",
  ["water bottle", "bottle", "water"],
  "A plastic <strong>water bottle</strong> that with some dirty water inside."
);

waterbottle.canTake = true;
waterbottle.canThrow = true;

const drinkWaterTrigger = (water) => {
  player.adjustHealth(-5);
  return "You take a sip of the dirty water. It tastes awful and you feel a bit sick afterwards";
};

waterbottle.createTrigger("consume", drinkWaterTrigger);
