let input = document.querySelector('input');
let button = document.querySelector('button');
let form = document.querySelector('form');
let todos = document.querySelector('.todos');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let val = input.value.trim();
    if(val){
        addTodo({
            text: val,
        })
        saveTodoList()
    }
    input.value = "";
    input.focus();
})
addTodo = (todo) =>{
    var li = document.createElement('li')
    li.innerHTML = `
                    <span>${todo.text}</span>
                    <i class="fa-solid fa-trash"></i>
                    
    `
    if(todo.status === 'completed'){
        li.setAttribute('class','completed');
    }
    todos.appendChild(li)
    li.addEventListener('click',function(){
        li.classList.toggle('completed');
        saveTodoList();
    })
    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove();
        saveTodoList();
    })
}
saveTodoList = () =>{
    let todoList = document.querySelectorAll('li');
    let todoListStorage = []
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        todoListStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList',JSON.stringify(todoListStorage));
}
init = () =>{
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function(item){
        addTodo(item)
    })
}
init()