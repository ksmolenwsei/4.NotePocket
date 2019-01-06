let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")
let submitForm = document.querySelector("#submitButton")

function getFormValues(){
    let values = localStorage.setItem(
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
    console.log(localStorage.getItem("aaa"))
})