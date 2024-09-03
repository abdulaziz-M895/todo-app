import updateTasksOrder from "./drag-and-drop/updateTasksOrder";

export default function completeTask(e) {
  const task = e.currentTarget.closest(".task");
  task.classList.toggle("completed");

  updateTasksOrder();
}
