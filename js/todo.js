let button = document.getElementById('todoBtn')
let allTodo = document.getElementById('all-todo')
let input = document.getElementById('inputField')

button.addEventListener('click', function(){
    let para = document.createElement('p')
    para.innerText = input.value;
    para.classList.add('para')
    allTodo.appendChild(para)
    input.value = "";

    para.addEventListener('click', function(){
        para.style.textDecoration = 'line-through'
    })
    para.addEventListener('dbclick', function(){
        allTodo.removeChild(para)
    })
})