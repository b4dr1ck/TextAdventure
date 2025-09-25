import { Weapon } from "../../classes.js";

export const knife = new Weapon(
  "knife",
  "knife1",
  ["knife", "kitchen knife", "sharp knife", "old knife"],
  "A sharp kitchen <strong>knife</strong> with a black handle.<br>The blade looks clean and well-maintained.",
  10
);

knife.canTake = true;
knife.canThrow = true;