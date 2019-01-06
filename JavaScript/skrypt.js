let addNoteButton = document.querySelector("#buttonAddNote")
let popup = document.querySelector("#popUpWindowWithForm")

console.log(addNoteButton)
addNoteButton.addEventListener('click', function(){
    popup.style.display = "block"
});