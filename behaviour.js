// Pobieranie tytułu i opisu taska
const taskTitleInput = document.getElementById('task-title-input');
const taskDescriptionInput = document.getElementById('task-description-input');

state = {
    title: null,
    description: null
}

setState = (e) => {
    let {name, value} = e.target;
    if (name === 'title') {
        state.title = value;
    } else if (name === 'description') {
        state.description = value;
    }
    showErrorMessage(false);
}

taskTitleInput.addEventListener('input', setState)
taskDescriptionInput.addEventListener('input', setState)

// Handle Add button
const form = document.getElementById('form');

handleFormSubmit = (e) => {
    e.preventDefault();
    if (!state.title || !state.description) {
        showErrorMessage(true);
    } else {
        let todos = JSON.parse(localStorage.getItem('todos'));
        let id;
        if (!todos) {
            todos = [];
            id = 1;
        } else {
            id = todos.length + 1;
        }
        let todo = {
            id: id,
            title: state.title,
            description: state.description
        };
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        addTask(todo);
    }
}

form.addEventListener('submit', handleFormSubmit);

// Validation error message
showErrorMessage = (show) => {
    if (show) {
        document.getElementById('validation-error').style.display = 'block';
    } else {
        document.getElementById('validation-error').style.display = 'none';
    }
}