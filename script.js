let totlEntered = document.getElementById("total-entered")
let passBy = document.getElementById("cave-gate")

let count = 0
function add() {
  count += 1
  passBy.innerText = count
}

function save() {
    let enteredPeople = count + " - "
    totlEntered.textContent += enteredPeople
    console.log(enteredPeople)
}