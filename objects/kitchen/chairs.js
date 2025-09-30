import { GameObject } from "../../classes.js";
import { rat } from "./rat.js";

export const chairs = new GameObject(
  "chairs",
  "chairs1",
  ["chairs", "wooden chairs", "chair"],
  "A couple of old wooden chairs stand around the table.<br>" +
    "They look simple but sturdy. Old and worn out, with some scratches and dents on the surface."
);

chairs.moveable = true;

const moveChairTrigger = (chair) => {
  chair.deletePreTrigger("move");
  rat.hidden = false;
  return "As you move the chair, a big fat rat jumps out from behind it,<br>startled and angry and runs into the next corner.";
};

chairs.createPreTrigger("move", moveChairTrigger);
chairs.createPreTrigger("take", () => "You raise one of the chairs, but it's too heavy to carry around.");
