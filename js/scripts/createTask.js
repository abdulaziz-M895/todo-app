export default function createTask(text ,isCompleted = false) {
  const task = document.createElement("li");
  task.className = `task ${isCompleted && "completed"}`;
  task.innerHTML = `
        <button class="completeTask">
          <div>
            <img src="images/icon-check.svg" alt="check icon" />
          </div>
        </button>
        <p class="text">${text}</p>
        <button class="removeTask">
          <img src="images/icon-cross.svg" alt="remove task image" />
        </button>
        `;

  return task;
}
