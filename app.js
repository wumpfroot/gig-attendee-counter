let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")


//Increment button function, that increases the attendee count by 1
function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

//Save button function, that saves the current attendee count and resets it back to zero.
function save() {
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    count = 0
    countEl.textContent = count
    console.log(count)
}