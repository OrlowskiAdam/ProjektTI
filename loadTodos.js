// Loads all todos
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.map(todo => {
        addTask(todo);
    })
}