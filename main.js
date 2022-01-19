let todoList = document.querySelector('#todo-list');
let todoForm = document.querySelector('#todo-form');
let todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler (event) {
    event.preventDefault();

    let taskText = todoInput.value;
    let newTask = document.createElement('li');
    newTask.innerText = taskText

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'buttom');
    deleteBtn.innerText = 'Удаліть';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });

    todoList.append(newTask);

    todoInput.value = '';
    todoInput.focus();
}