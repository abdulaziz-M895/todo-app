export default function addTaskToStorage(task) {
  const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskObj = {
    value: task.querySelector(".text").textContent,
    isCompleted: task.classList.contains("completed"),
  };

  tasksArray.unshift(taskObj);

  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
