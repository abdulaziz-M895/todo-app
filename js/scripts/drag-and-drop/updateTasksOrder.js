import { taskList } from "../elements";

export default function updateTasksOrder() {
  const tasks = Array.from(taskList.children);

  const tasksArray = tasks.map((task, index) => ({
    value: task.querySelector(".text").textContent,
    isCompleted: task.classList.contains("completed"),
  }));
  
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}