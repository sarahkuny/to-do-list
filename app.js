const toDoItems = [];

function createToDo(toDo) {
    const item = {
        toDo,
        completed: false,
        id: Date.now(),
    }
    toDoItems.push(item)
    renderItem(item)
}

//grab form
const form = document.querySelector('.form');

form.addEventListener('submit', e => {     //event listener to create todo item
    e.preventDefault();   // prevents page from reloading
    const input = document.querySelector('.input');
    createToDo(input.value); //creates to-do item
    input.value = ''; 
    input.focus();        //resets input 
})

function renderItem(item) {     //renders to-do list on page
    const list = document.querySelector('.list'); //grab list on page
    const listItem = document.createElement("li"); //create list item
    const isChecked = item.completed ? 'completed' : ''; //create isChecked bool
    
    listItem.setAttribute('class',`item ${isChecked}`); //set isChecked as class on li element
    listItem.setAttribute('data-key', item.id); //set id as data-key attribute
    listItem.innerHTML = `<input id=${item.id} type="checkbox"/> 
    <label for="${item.id} class="tick js-tick"></label>
    <span>${item.toDo}</span><button class="delete-todo js-delete-todo">
    <img src="./red-x.png" />
    </button>`

    list.append(listItem) //append list item to DOM?
}