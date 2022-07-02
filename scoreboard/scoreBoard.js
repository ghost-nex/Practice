const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const resetBtn = document.getElementById("reset-btn")
let num = 0
let num1 = 0
const addOne = document.getElementById("add-one")
addOne.addEventListener ("click", function() {
    num += 1  
    homeScore.textContent = num
})
const addTwo = document.getElementById("add-two")
addTwo.addEventListener ("click", function() {
    num += 2
    homeScore.textContent = num
})
const addThree = document.getElementById("add-three")
addThree.addEventListener("click", function () {
     num += 3
    homeScore.textContent = num
})
const addsOne = document.getElementById("adds-one")
addsOne.addEventListener ("click", function() {
    num1 += 1  
    guestScore.textContent = num1
})
const addsTwo = document.getElementById("adds-two")
addsTwo.addEventListener ("click", function() {
    num1 += 2  
    guestScore.textContent = num1
})
const addsThree = document.getElementById("adds-three")
addsThree.addEventListener ("click", function() {
    num1 += 3  
    guestScore.textContent = num1
})

resetBtn.addEventListener("click", function() {
    num = 0
    num1 = 0
    homeScore.textContent = num
    guestScore.textContent = num1
})