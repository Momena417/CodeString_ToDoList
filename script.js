// script.js

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        // Add task text
        li.textContent = taskValue;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Add click event to mark task as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Append delete button to task item
        li.appendChild(deleteBtn);

        // Add task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
});
