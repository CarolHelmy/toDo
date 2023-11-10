let input = document.querySelector("input[type = text]");
let button = document.querySelector("input[type = submit]");

var date = new Date();
document.getElementById("datetime").innerHTML = date.toLocaleString();

let pink = document.querySelector(".color.pink");
let light = document.querySelector(".color.light");
let std = document.querySelector(".color.standard");

pink.addEventListener('click', changeTheme);
light.addEventListener('click', ch);
std.addEventListener('click', st);

button.addEventListener('click', addInputValue);



function addInputValue (event){
    event.preventDefault();
    let InputValue = input.value;

    if (input.value === '') {
        alert("You must write something!");
        window.localStorage.getItem("tasks").remove([]) 
        
    }
    if(window.localStorage.getItem("tasks")){
    const tasks = JSON.parse(window.localStorage.getItem ("tasks"))
    if(InputValue === null){
        task.remove(JSON.parse(tasks[-1]));
      }
    tasks.push(InputValue)
      
    window.localStorage.setItem("tasks", JSON.stringify(tasks) )

    }
    else{
        window.localStorage.setItem("tasks", JSON.stringify([InputValue]));
    }


    if (input.value === '') {
        alert("You must write something!");
    } 
    else {
    let task = document.createElement("li");
    task.innerHTML = `
    <span>${InputValue}</span>
    <div class='actions'>
    <i class='fa-solid fa-square-check'></i>
    <i class='fa-solid fa-trash'></i>
    </div>
    `;

    document.querySelector('ul').appendChild(task);
    document.querySelector('li').addEventListener('click', done);
    document.querySelector('.fa-solid.fa-trash').addEventListener('click', trash);

    input.value = "";
}
}

function getToDos(){

    const toDos = JSON.parse(window.localStorage.getItem("tasks"));
    if(window.localStorage.getItem("tasks") !== null){

    toDos.forEach(todo => {
    
    let task = document.createElement("li");
    task.innerHTML = `
    <span>${todo}</span>
    <div class='actions'>
    <i class='fa-solid fa-square-check'></i>
    <i class='fa-solid fa-trash'></i>
    </div>
    `;

    document.querySelector('ul').appendChild(task);
    document.querySelector('li').addEventListener('click', done);
    document.querySelector('.fa-solid.fa-trash').addEventListener('click', trash);

    input.value = "";
    });
}
    else{
        document.querySelector("ul").innerHTML = "Your tasks will appear here!";

    }
}


function done(){
    this.style.textDecoration = "line-through";
    this.style.color = "gray";
    this.style.opacity = "0.5";
}

function trash(){
    // this.parentElement.parentElement.remove();
    console.log(this.parentElement.parentElement.classList.add("delete"));
    let todos = JSON.parse(window.localStorage.getItem("tasks"));

    const text = this.parentElement.previousElementSibling.innerText;
    todos = todos.filter(todo => todo !== text);
    window.localStorage.setItem("tasks", JSON.stringify(todos));



}

function changeTheme(){
    document.body.classList.add("pink");
    document.body.classList.remove("light");
}
function ch(){
    document.body.classList.add("light");
    document.body.classList.remove("pink");
}
function st(){
    document.body.classList.remove("light");
    document.body.classList.remove("pink");
}


document.body.onload = getToDos;