const addTaskBtn = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const taskContainer = document.getElementById("taskContainer");

defaultTasks = ["Buy groceries", "Read 30 mins", "Workout"];
let tasks = [];

function addTaskElement(text) {
  const newTaskLi = document.createElement("li");
  newTaskLi.className = "task-item";

  // newTaskLi.textContent = `${text} ------- ${showTimeAndDate()}`

  // Task text in a separate span
  const span = document.createElement("span");
  span.textContent = `${text} — ${showTimeAndDate()}`;
  newTaskLi.appendChild(span);

  newTaskLi.addEventListener("click", () => {
    newTaskLi.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // e.preventDefault()
    newTaskLi.remove();
  });
  newTaskLi.appendChild(deleteBtn);


  return newTaskLi;
}

function addTask(text) {
  const trimmedText = String(text).trim();
  if (!trimmedText) {
    return alert("task cannot be empty");
  }
  let aleradyExists = false;
  tasks.forEach((task) => {
    if (task.toLowerCase() === trimmedText.toLowerCase()) {
      aleradyExists = true;
    }
  });
  if (aleradyExists) {
    alert("This task already exists");
    taskInput = "";
    return;
  }
  tasks.push(trimmedText);
  const newTaskLi = addTaskElement(trimmedText);
  taskContainer.appendChild(newTaskLi);
  taskInput.value = "";

  //save tasks
  saveTasks()
  //updating the counter
  updateCounter();
}

addTaskBtn.addEventListener("click", function () {
  addTask(taskInput.value);
});

taskInput.addEventListener("keydown", (e) => {
  // console.log(e)
  if (e.key === "Enter") {
    addTask(taskInput.value);
  }
});

defaultTasks.forEach((text) => {
  addTask(text);
});

function updateCounter() {
  const counter = document.querySelector("#taskCount");
  counter.textContent = tasks.length;
}

function showTimeAndDate() {
  const now = new Date();
  return `date Created : ${now.toLocaleDateString()}, Time : ${now.toLocaleTimeString()}`;
}


function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}           

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  } else {
    // No saved tasks → load default tasks
    tasks = [...defaultTasks]; // clone array
    saveTasks(); // save defaults to localStorage
  }

  // Append to DOM
  taskContainer.innerHTML = ''; // clear first to avoid duplicates
  tasks.forEach((task) => {
    taskContainer.appendChild(addTaskElement(task));
  });

  updateCounter();
}

// -------- Initialize --------
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});
