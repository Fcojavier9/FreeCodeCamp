// DOM Elements
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// variables y constantes
const taskData = JSON.parse(localStorage.getItem("data")) || []; // obtenemos el array de tareas del local storage o un array vacio
let currentTask = {};

// funciones
const addOrUpdateTask = () => {
  // buscamos el primer elemento que coincidad el id con el task actual para saber
  // si es un update o un add
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    // si no existe el elemento en el array
    taskData.unshift(taskObj); // lo añadimos al principio del array
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData)); // guardamos el array en el local storage
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
        </div>
      `;
  });
};

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id //con parentElement.id accedemos al elemento padre (id del div) que contiene el boton
  );
  buttonEl.parentElement.remove(); // borramos el div del DOM
  taskData.splice(dataArrIndex, 1); // borramos el elemento del array
  localStorage.setItem("data",JSON.stringify(taskData)); // actualizamos el local storage
};

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  currentTask = taskData[dataArrIndex]; // guardamos el objeto actual en la variable currentTask

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";
  taskForm.classList.toggle("hidden");
};

const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  addOrUpdateTaskBtn.innerText = "Add Task";

  taskForm.classList.toggle("hidden");
  currentTask = {};
};

// ejecución
if(taskData.length) {
  updateTaskContainer();
}

// desoculto el formulario
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

// abro el modal de confirmación que esta creado en el html
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;

  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // paramos el auto-refresco del navegador al enviar el formulario

  addOrUpdateTask();
});
