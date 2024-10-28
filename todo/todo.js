// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("タスクを入力してください");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    const textNode = document.createTextNode(taskText);

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = "削除";
    deleteButton.onclick = function() {
        li.remove();
    };

    // Create progress bar container
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    // Create progress bar
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressContainer.appendChild(progressBar);

    // Append elements to the list item
    li.appendChild(textNode);
    li.appendChild(deleteButton);
    li.appendChild(progressContainer);

    // Add progress functionality
    progressContainer.onclick = function() {
        let currentWidth = parseInt(progressBar.style.width);
        if (isNaN(currentWidth)) currentWidth = 0;
        const newWidth = currentWidth + 20;
        if (newWidth <= 100) {
            progressBar.style.width = newWidth + "%";
        } else {
            progressBar.style.width = "100%";
        }
    };

    // Add list item to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Add event listener for button click to add task
document.getElementById("addTaskButton").addEventListener("click", addTask);
