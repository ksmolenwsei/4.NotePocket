let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")

function getFormValues(){
    let values = new Array(
        document.querySelector("#title").value,
        document.querySelector("#value").value
    )
    return values
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
    let values = getFormValues()
    console.log(values[0])
})