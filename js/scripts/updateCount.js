import { itemsLeft } from "./elements";

export default function updateCount(currentTasksLength) {
  itemsLeft.textContent = currentTasksLength;
}
