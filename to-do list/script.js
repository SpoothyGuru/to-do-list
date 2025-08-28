function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <button onclick="deleteTask(this)">Delete</button>`;
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  let taskList = document.getElementById("taskList");
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

window.onload = loadTasks;
function toggleComplete(li) {
    li.classList.toggle("completed");
}
li.addEventListener('click', function() {
    toggleComplete(li);
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
let li = document.createElement("li");
li.innerHTML = `${taskInput.value} - ${taskDate.value} <button onclick="deleteTask(this)">Delete</button>`;
