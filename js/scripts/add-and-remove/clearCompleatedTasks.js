import updateCount from "../updateCount";

export default function clearCompletedTasks() {
  const tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

  document.querySelectorAll(".taskList li.completed").forEach((task) => {
    const index = tasksArray.findIndex(
      (wantedTask) =>
        task.querySelector(".text").textContent === wantedTask.value
    );

    tasksArray.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasksArray));

    task.remove();
  });

  updateCount(tasksArray.length);
}
