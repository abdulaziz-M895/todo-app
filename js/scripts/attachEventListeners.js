import removeTask from "./add-and-remove/removeTask";
import completeTask from "./completeTask";

export default function attachEventListeners(task) {
  task.querySelector(".completeTask").addEventListener("click", completeTask);
  task.querySelector(".removeTask").addEventListener("click", removeTask);
}
