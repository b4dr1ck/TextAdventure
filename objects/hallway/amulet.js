import { Equipment } from "../../classes.js";
import { player } from "../../init.js";

export const amulet = new Equipment(
  "strange amulet",
  "amulet1",
  ["amulet", "silver amulet", "necklace", "strange amulet"],
  "A strange silver amulet with a black gem in the center that shows a skull engraving."
);
amulet.canTake = true;
amulet.canThrow = true;

const amuletWearTrigger = () => {
  player.adjustHealth(-100);
  return (
    "You put on the amulet.<br>Out of the sudden, you feel a surge of dark energy coursing through your veins.<br>" +
    "Your skin begins to get paler, and your eyes darken.<br>" +
    "Seconds later you fall to the ground..."
  );
};

amulet.createPostTrigger("dress", amuletWearTrigger);
