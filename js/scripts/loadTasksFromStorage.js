import createTask from "./createTask";
import { taskList } from "./elements";
import updateCount from "./updateCount";
import { initializeSortable } from "./add-and-remove/addTask";
import attachEventListeners from "./attachEventListeners";

export default function loadTasksFromStorage() {
  const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

  tasksArray.forEach((task) => {
    const newTask = createTask(task.value, task.isCompleted);
    taskList.appendChild(newTask);
    attachEventListeners(newTask);
  });

  updateCount(taskList.children.length);

  initializeSortable();
}
