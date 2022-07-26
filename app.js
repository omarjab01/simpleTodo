// Seleziono la lista ( contenitore ul )
var ulLista = document.querySelector("ul");

// bottone per inserire la task
var bottoneInserisci = document.querySelector("#inserisci");

// input field per scrivere
var inputField = document.getElementById("inputField");

ulLista.addEventListener("click", delItem)

function isEmpty(inputField){
    if(inputField.value.length === 0)
    {
        alert("non può essere vuoto questo campo")
        return false;
    }
    else{
        return true;
    }
}

bottoneInserisci.addEventListener("click", () => {
    if(isEmpty(inputField)){
        aggiungiTask(inputField.value)
        inputField.value = "";
    }
})

function delItem(e) {
    if(e.target.classList.contains("btn-del")){
        e.target.parentElement.remove()
    }
    if(e.target.classList.contains("list-task")){
        e.target.classList.toggle("done")
    }
}

function toggleDone() {
    oggettoLista.classList.toggle("done")
}

function aggiungiTask (task) {

    // creo elemento li
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    li.className = "list-task"

    var bottoneElimina = document.createElement("button");
    bottoneElimina.appendChild(document.createTextNode("X"))
    bottoneElimina.className = "btn-del"

    li.appendChild(bottoneElimina);
    ulLista.appendChild(li);
    console.log(ulLista)

}