let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")

function getAndSetFormValues(){
  
    let data = {
    'title': document.querySelector("#title").value,
    'value': document.querySelector("#value").value,
    'date': Date.now()

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
}
