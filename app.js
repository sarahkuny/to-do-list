const toDoItems = [];

function createToDo(toDo) {
    const item = {
        toDo,
        completed: false,
        id: Date.now(),
    }
    toDoItems.push(item)
    console.log(toDoItems)
}

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const input = document.querySelector('.input');

    createToDo(input.value);

    input.value = '';
    input.focus();

    

})

