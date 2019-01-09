let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")
let tasksID = document.querySelector('#tasks')


// funkcja pinOnTopButton tworzy przycisk do przypinania notatki na górze listy, jako argument przyjmuje diva, w którym znajdują się notatki.
function pinOnTopButton(divForTask){
    let button = document.createElement("div")
    button.classList.add("pinontop")
    button.innerText = "Przypnij notkę"
    divForTask.appendChild(button)
    
    button.addEventListener("click", function(){
        this.parentNode.parentNode.prepend(this.parentNode)
    })
}

//tworzy przycisk do kasowania notatki, jako argumenty przyjmuje ID notatki oraz diva, w którym się znajdują.
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
//wyświetla notatkę, pobiera klucz i wartość obiektu z local storage, przypisuje mu przyciski
function displayNote(retrievedObject, i){
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

   
//efekt toogle dla formularza dodawania notatki
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

//klasa której wywołanie skutkuje utworzeniem nowej notatki
class Note {
    constructor(){
        let dropdown = document.querySelector("select")
        let date = new Date()
        let fullDate =  date.getDate() + "." + date.getMonth()+1 + "." + date.getFullYear() + "\t\t"+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

        let data = {
        'title': document.querySelector("#title").value,
        'value': document.querySelector("#value").value,
        'date': fullDate,
        'color': dropdown.options[dropdown.selectedIndex].value
        }
        localStorage.setItem(localStorage.length + 1, JSON.stringify(data))
    }  
}
//po zatwierdzeniu formularza tworzy notkę z danymi pobranymi z pól 
submitForm.addEventListener("click", function(){
    let note = new Note()
})
//po kolei wyświetla notatki
for(i in localStorage)
{
    let retrievedObject = JSON.parse(localStorage.getItem(i))
    displayNote(retrievedObject, i)
}
