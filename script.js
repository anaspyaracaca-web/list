
var taskInput = document.getElementById("taskInput");

var taskList = document.getElementById("taskList");

var tasks = [];

function addTask() {

    var task = taskInput.value;

    if (task.trim() === "") {
        return;
    }

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {

    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        var li = document.createElement("li");

        var span = document.createElement("span");

        span.textContent = tasks[i];

        span.className = "task-text";

        var editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-button";

        editButton.setAttribute("onclick", "editTask(" + i + ")");

        var deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-button";

        deleteButton.setAttribute("onclick", "deleteTask(" + i + ")");

        li.appendChild(span);

        li.appendChild(editButton);

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
}

function editTask(index) {

    var li = taskList.children[index];

    var span = li.children[0];

    var button = li.children[1];

    if (button.textContent === "Edit") {

        span.contentEditable = true;

        span.focus();

        button.textContent = "Save";

        button.className = "save-button";

    }

    else {

        if (span.textContent.trim() !== "") {

            tasks[index] = span.textContent;

            span.contentEditable = false;

            button.textContent = "Edit";

            button.className = "edit-button";

        }
    }
}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}
function resetTasks() {

    tasks = [];

    displayTasks();

}

