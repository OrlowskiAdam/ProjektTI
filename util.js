// Add new task to list
addTask = (todo) => {
    let taskElement = document.getElementById('tasks');
    let div = document.createElement('div');
    div.id = todo.id;

    let taskTitle = document.createElement('dt');
    taskTitle.innerHTML = todo.title;
    taskTitle.classList.add('task-title');
    taskElement.appendChild(taskTitle);

    let taskDescription = document.createElement('dd');
    taskDescription.innerHTML = "- " + todo.description;
    taskElement.appendChild(taskDescription);

    let deleteSpan = document.createElement('span');
    deleteSpan.innerHTML = "done";
    deleteSpan.addEventListener('click', () => deleteTask(todo.id));
    taskTitle.appendChild(deleteSpan);

    div.appendChild(taskTitle);
    div.appendChild(taskDescription);

    taskElement.appendChild(div);
}

removeTaskFromStorage = (taskId) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    const index = todos.findIndex(i => i.id === taskId);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Delete task
deleteTask = (taskId) => {
    let task = document.getElementById(taskId);
    task.remove();
    removeTaskFromStorage(taskId);

}
