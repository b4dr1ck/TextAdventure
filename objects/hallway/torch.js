import { GameObject } from "../../classes.js";

export const torch = new GameObject(
  "torch",
  "torch1",
  ["torch", "ancient torch", "wall torch", "torch", "different torch"],
  "An ancient wall-mounted torch made of iron.<br>The handle is a bit different from the others and looks very abused and worn."
);

torch.moveable = true;

const torchMoveTrigger = (torch) => {
  return "You push the torch to the side a bit and hear some stones shifting nearby.";
};

torch.createTrigger("move", torchMoveTrigger);
