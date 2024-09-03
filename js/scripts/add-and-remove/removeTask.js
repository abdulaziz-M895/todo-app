import updateTasksOrder from "../drag-and-drop/updateTasksOrder";
import { taskList } from "../elements";
import updateCount from "../updateCount";

export default function removeTask(e) {
  const task = e.currentTarget.closest(".task");
  task.remove();

  updateCount(taskList.children.length);
  updateTasksOrder();
}
