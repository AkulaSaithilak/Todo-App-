const taskInput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTasksHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const blank = [];
const createNewTaskElement = (taskString) => {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  const deleteButton = document.createElement("button");

  checkBox.type = "checkbox";

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  listItem.appendChild(deleteButton);

  return listItem;
};


const addTask = () => {
  if (taskInput.value.length > 0) {

    const found = blank.includes(taskInput.value)

    if (found === false) {
      const listItemName = taskInput.value;

      const listItem = createNewTaskElement(listItemName);
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
      taskInput.value = "";
      blank.push(listItemName)
    }
    else {
      alert("Already exist")
    }

  }
};



const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const taskCompleted = function () {
  const listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

const taskIncomplete = function () {
  const listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  const checkBox = taskListItem.querySelector("input[type=checkbox]");
  const deleteButton = taskListItem.querySelector("button.delete");
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
};

addButton.addEventListener("click", addTask);

