import { GameObject } from "../../classes.js"; 
import { player } from "../../init.js";

export const book = new GameObject(
  "book",
  "book1",
  ["book", "mystic book", "old book", "grimoire"],
  "A very old-looking book lies on the pedestal. A red magical symbol can be seen on the black cover."
);

const bookTrigger = (book) => {
  player.adjustHealth(-10);
  return (
    "As you try to take the book from the pedestal,<br>a sudden burst of magical energy erupts from it, sending you reeling backward.<br>" +
    "The book remains firmly on the podium, its cover glowing faintly."
  );
};
book.createPreTrigger("read", bookTrigger);
book.createPreTrigger("take", bookTrigger);
book.createPreTrigger("attack", bookTrigger);
book.createPreTrigger("smell", bookTrigger);
