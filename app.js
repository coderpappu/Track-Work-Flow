// user input todo title 
let userInput = document.querySelector("#todoTitle");
// todo add button 
let addTodoBtn = document.querySelector("#addTodo");
// table body 
let tableBody = document.querySelector("#tblData");

let userData = [
    
]



if(localStorage.getItem("todos") === null){
localStorage.setItem('todos',JSON.stringify(new Array()))
}

let dataLength = JSON.parse(localStorage.getItem("todos"))
let userId = dataLength.length;

let allDataShow = () =>{
    tableBody.innerHTML = "";
    

    let getData = JSON.parse(localStorage.getItem("todos"));
    
    getData.forEach((todo, index)=>{
       

        tableBody.innerHTML += ` 
        <tr>
            <td>${todo.id}</td>
            <td>${todo.data}</td>
            <td>
                <button data-itemid="" class="btn btn-success">
                    Edit
                </button>
                <button
                    data-itemid=""
                    id="deleteBtn"
                    class="btn btn-danger"
                    onclick="deleteTodo(${todo.id})"
                >
                Delete
            </button>
        </td>
      </tr>`

    });
}

let deleteTodo = (id) =>{
   
    let getData = JSON.parse(localStorage.getItem("todos"))

    let storeData = getData.filter((todo) => todo.id !== id);
    
    localStorage.setItem('todos', JSON.stringify(storeData));

    allDataShow()
}


allDataShow()

addTodoBtn.addEventListener('click',()=>{
    userId++
 // user input value 
    let userInputValue = userInput.value;

    let newLocalStorage = JSON.parse(localStorage.getItem("todos"));

    console.log(newLocalStorage)

    newLocalStorage.push({
        id : userId,
        data : userInputValue
    })
    

    localStorage.setItem("todos", JSON.stringify(newLocalStorage));
    allDataShow()
    
})

