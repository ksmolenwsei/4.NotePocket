let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")
let tasksID = document.querySelector('#tasks')



function getAndSetFormValues(){
    // let date = new Date()
    // let fullDate = leadingZero(date.getHours()) + ':' + leadingZero(date.getMinutes()) + ':' + leadingZero(date.getSeconds() + " " + leadingZero(date.getDate()) + "." + leadingZero(date.getMonth()+1) + "." + date.getFullYear())
    // console.log(fullDate)
    let dropdown = document.querySelector("select")
    let data = {
    'title': document.querySelector("#title").value,
    'value': document.querySelector("#value").value,
    'date': new Date(),
    'color': dropdown.options[dropdown.selectedIndex].value

    }
    localStorage.setItem(localStorage.length + 1, JSON.stringify(data))
}


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


submitForm.addEventListener("click", function(){
    let values = getAndSetFormValues()

})


for(let i = 1; i<= localStorage.length; i++)
{
    let retrievedObject = JSON.parse(localStorage.getItem(i))
    console.log(retrievedObject)


    let divForTask = document.createElement("div")
    divForTask.style.backgroundColor = retrievedObject.color
    divForTask.classList.add("task")
    tasksID.appendChild(divForTask)

    let h2ForTitle = document.createElement("h2")
    h2ForTitle.innerText = retrievedObject.title
    divForTask.appendChild(h2ForTitle)

    let placeForValue = document.createElement("h3")
    placeForValue.innerText = retrievedObject.value
    divForTask.appendChild(placeForValue)


}
