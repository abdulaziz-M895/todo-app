import { taskList } from "./elements";

export default function shownTasksHandler(e) {
  const target = e.target;

  const tasks = Array.from(taskList.children);

  document.querySelector(".shown_tasks .active").classList.remove("active");

  target.classList.add("active");

  tasks.forEach((task) => {
    if (target.dataset.type === "active") {
      !task.classList.contains("completed")
        ? task.classList.remove("d-none")
        : task.classList.add("d-none");
    } else if (target.dataset.type === "completed") {
      task.classList.contains("completed")
        ? task.classList.remove("d-none")
        : task.classList.add("d-none");
    } else {
      task.classList.remove("d-none");
    }
  });
}
