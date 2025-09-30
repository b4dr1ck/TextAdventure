import { TriggerObject } from "../../classes.js";
import { player } from "../../init.js";

export const torch = new TriggerObject(
  "torch",
  "torch1",
  ["torch", "ancient torch", "wall torch", "torch", "different torch"],
  "An ancient wall-mounted torch made of iron.<br>The handle is a bit different from the others and looks very abused and worn."
);

torch.moveable = true;
torch.canToggle = false;
torch.turnOn();
torch.stateOnDescription = "<br>It is lit, illuminating the surroundings with a warm glow.";
torch.stateOffDescription = "It is unlit.";

const torchMoveTrigger = (torch) => {
  if (torch.state) {
    player.adjustHealth(-5);
    return "As you touch the lit torch, you quickly pull your hand back - it's too hot to handle!";
  }
  torch.deleteTrigger("move");
  return "You push the torch to the side a bit and hear some stones shifting nearby.";
};

const torchUseTrigger = (item) => {
  if (item.uniqueKey === "waterbottle1") {
    torch.turnOff();
    torch.deleteTrigger("use");
    return "You extinguish the torch with the water from the bottle.<br>The torch is now unlit.";
  }
  return "You can't use that on the torch.";
};

torch.createPostTrigger("move", torchMoveTrigger);
torch.createPostTrigger("use", torchUseTrigger);
