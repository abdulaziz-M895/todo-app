import addTask from "./scripts/add-and-remove/addTask";
import clearCompletedTasks from "./scripts/add-and-remove/clearCompleatedTasks";
import { initializeSortable } from "./scripts/add-and-remove/addTask";
import {
  clearCompleted,
  createTaskForm,
  shownTasksElement,
} from "./scripts/elements";
import loadTasksFromStorage from "./scripts/loadTasksFromStorage";
import shownTasksHandler from "./scripts/shownTasksHandler";

document.addEventListener("DOMContentLoaded", loadTasksFromStorage);

createTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

clearCompleted.addEventListener("click", clearCompletedTasks);

shownTasksElement.addEventListener("click", shownTasksHandler);

initializeSortable();
