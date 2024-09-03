import addTaskToStorage from "./addTaskToStorage";
import completeTask from "../completeTask";
import createTask from "../createTask";
import { listHasTask, taskList } from "../elements";
import removeTask from "./removeTask";
import updateCount from "../updateCount";
import Sortable from "sortablejs";
import updateTasksOrder from "../drag-and-drop/updateTasksOrder";

let sortable;

export function initializeSortable() {
  sortable = Sortable.create(taskList, {
    animation: 150,
    onEnd: function (evt) {
      updateTasksOrder();
    },
  });
}

export default function addTask() {
  const inputElement = document.querySelector("#create_task_input");
  const inputValue = inputElement.value;

  if (!inputValue.trim()) {
    return;
  }

  const currentTasks = Array.from(document.querySelectorAll(".taskList .task"));
  const taskAlreadyAdded = currentTasks.some(
    (task) => task.querySelector(".text").textContent === inputValue
  );
  if (taskAlreadyAdded) {
    listHasTask.classList.add("shown");
    return;
  } else {
    listHasTask.classList.remove("shown");
  }

  const task = createTask(inputValue);

  taskList.prepend(task);

  addTaskToStorage(task);

  inputElement.value = "";

  const currentTasksLength = taskList.children.length;

  task.querySelector(".completeTask").addEventListener("click", function (e) {
    completeTask(e, currentTasksLength - 1);
  });
  task.querySelector(".removeTask").addEventListener("click", removeTask);

  updateCount(currentTasksLength);

  // Update Sortable instance
  sortable.option("disabled", false);
}
