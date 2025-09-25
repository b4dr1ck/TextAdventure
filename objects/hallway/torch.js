import { TriggerObject } from "../../classes.js";
import { player } from "../../init.js";

export const torch = new TriggerObject(
  "torch",
  "torch1",
  ["torch", "ancient torch", "wall torch", "torch", "different torch"],
  "An ancient wall-mounted torch made of iron.<br>The handle is a bit different from the others and looks very abused and worn."
);

torch.stateOnDescription = "<br>The torch is burning brightly, casting a warm glow around it.";
torch.stateOffDescription = "The torch is unlit.";
torch.turnOn();

const torchUseTrigger = (object) => {
  if (object.uniqueKey === "waterbottle1") {
    if (torch.state) {
      torch.turnOff();
      player.removeFromInventory(object.uniqueKey);
      return "You pour the water from the bottle onto the torch, extinguishing its flame.<br>The torch is now unlit.";
    }
  }
  return `You can't use the <strong>${object.name}</strong> here.`;
};
const torchMoveTrigger = (torch) => {
  if (torch.state) {
    player.adjustHealth(-5);
    return "The torch is burning, so it's a bad idea to move it around. You burn yourself slightly.";
  }
  return "You push the torch to the side a bit and hear some stones shifting nearby.";
};

const torchActivateTrigger = (torch) => {
  return "You can't light the torch without a source of fire.";
};

const torchDeactivateTrigger = (torch) => {
  return "You can't extinguish the torch without any source of water.";
};

torch.createTrigger("use", torchUseTrigger);
torch.createTrigger("move", torchMoveTrigger);
torch.createTrigger("activate", torchActivateTrigger);
torch.createTrigger("deactivate", torchDeactivateTrigger);
torch.moveable = true;
