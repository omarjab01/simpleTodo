var tasks = ["pizza", "pasta", "acqua"];

var listaTasks = document.querySelector("ul");
var inputField = document.querySelector("input");
var addButton = document.getElementById("inserisci")

renderTasks();

function aggiungiTask(){

}


addButton.addEventListener("click", () => {
    console.log(inputField.value)
    tasks.push(inputField.value)
    renderTasks();
})


function removeChild(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function renderTasks(){
    removeChild(listaTasks);
    for(var i = 0; i<tasks.length; i++){
        var lista = document.createElement("li")
        var testo = document.createTextNode(tasks[i]);
        lista.appendChild(testo)
        lista.classList.add("item-lista")
        listaTasks.appendChild(lista);
        var bottone = document.createElement("button");
        var text2 = document.createTextNode("X");
        bottone.appendChild(text2);
        bottone.classList.add("remove-task")
        bottone.setAttribute("id", "remove-task-"+i);
        lista.appendChild(bottone)
        document.querySelector("#remove-task-"+i).addEventListener("click", () => {
            let parentEl = document.querySelector(".remove-task").parentNode;
            listaTasks.removeChild(parentEl)
        })
    }
}






var oggettiLista = document.querySelectorAll("li");









