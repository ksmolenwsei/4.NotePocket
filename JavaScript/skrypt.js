let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")
let tasksID = document.querySelector('#tasks')


function pinOnTopButton(divForTask){
    let button = document.createElement("div")
    button.classList.add("pinontop")
    button.innerText = "Przypnij notkę"
    divForTask.appendChild(button)
}


function remove(id,divForTask) {
    let exitButton = document.createElement("div")
    exitButton.classList.add("exitbutton")
    divForTask.appendChild(exitButton)
    let exit1 = document.createElement("div")
    let exit2 = document.createElement("div")
    exit1.classList.add("exit1")
    exit2.classList.add("exit2")

    exitButton.appendChild(exit1)
    exitButton.appendChild(exit2)
    exitButton.addEventListener("click", function(){
        if (confirm('Czy chcesz usunąć tę notatkę?')) {
            localStorage.removeItem(id)
            location.reload()
        }
    })
}

function displayNote(retrievedObject, id){
    let divForTask = document.createElement("div")
    divForTask.style.backgroundColor = retrievedObject.color
    divForTask.classList.add("task")
    tasksID.appendChild(divForTask)
    remove(i,divForTask)
    pinOnTopButton(divForTask)

    let h2ForTitle = document.createElement("h2")
    h2ForTitle.innerText = retrievedObject.title
    divForTask.appendChild(h2ForTitle)

    let placeForValue = document.createElement("h3")
    placeForValue.innerText = retrievedObject.value
    divForTask.appendChild(placeForValue)

    let placeForDate = document.createElement("h4")
    placeForDate.innerText = retrievedObject.date
    divForTask.appendChild(placeForDate)
}

    // let date = new Date()
    // let fullDate = leadingZero(date.getHours()) + ':' + leadingZero(date.getMinutes()) + ':' + leadingZero(date.getSeconds() + " " + leadingZero(date.getDate()) + "." + leadingZero(date.getMonth()+1) + "." + date.getFullYear())
    // console.log(fullDate)



addNoteButton.addEventListener('click', function(){
    if(popup.style.display == "none")
    {
        popup.style.display = "block"
    }
    else
    {
        popup.style.display = "none"
    }
})




class Note {
    constructor(){
        let dropdown = document.querySelector("select")
        let data = {
        'title': document.querySelector("#title").value,
        'value': document.querySelector("#value").value,
        'date': new Date(),
        'color': dropdown.options[dropdown.selectedIndex].value
        }
        localStorage.setItem(localStorage.length + 1, JSON.stringify(data))
    }  
}







submitForm.addEventListener("click", function(){
    let note = new Note()
    console.log(note)
})


for(i in localStorage)
{
    let retrievedObject = JSON.parse(localStorage.getItem(i))
    console.log(i)
    displayNote(retrievedObject, i)
}
