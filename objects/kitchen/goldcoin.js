import { GameObject } from "../../classes.js";

export const goldCoin = new GameObject(
  "gold coin",
  "goldCoin1",
  ["coin", "gold coin", "shiny coin"],
  "A shiny gold <strong>coin</strong> that glimmers in the light.<br>It looks valuable."
);
goldCoin.canTake = true;
goldCoin.hidden = true;
goldCoin.sceneryDescription = "A shiny <strong>gold coin</strong> lies on the floor, glimmering in the light.";
