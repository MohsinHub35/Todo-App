// let todo=[];
// let req=prompt("enter your choice of request");


// while(true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("--------------");
//     }
//     else if(req=="add"){
//         let task=prompt("Enter your task that you want to add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req=="delete"){
//         let idx=prompt("Enter your index that you want to delete");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("Wrong Request");
//     }
//     req=prompt("enter your choice of request");
    
// }
let todo = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task !== "") {
        todo.push(task);
        taskInput.value = "";
        renderTasks();
        console.log("Task added");
    } else {
        alert("Please enter a task");
    }
}

function deleteTask(index) {
    todo.splice(index, 1);
    renderTasks();
    console.log("Task deleted");
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    todo.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        li.classList.add("task-item");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deleteTask(index));

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

renderTasks();
