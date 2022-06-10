let number = window.prompt("number:")
let numberEl = document.getElementById("number-el")
numberEl.textContent = number
let lengthEl = document.getElementById("length-el")
lengthEl.textContent = length()
let volumeEl = document.getElementById("volume-el")
volumeEl.textContent = volume()
let massEl = document.getElementById("mass-el")
massEl.textContent = mass()

function length() {
    let metersToFeet = (number * 3.28084).toFixed(3)
    let feetsToMeters = (number * 0.3048).toFixed(3)
    return number + " meters = " + metersToFeet + " feet | " + number + " feet = "
    + feetsToMeters + " meters"
}

function volume() {
    let litresToGallons = (number * 0.2641729).toFixed(3)
    let gallonsToLitres = (number * 3.7854).toFixed(3)
    return  number + " litres = " + litresToGallons + " gallons | " 
    + number + " gallons = "
    + gallonsToLitres + " litres"
}

function mass() {
    let kilosToPounds = (number * 2.204623).toFixed(3)
    let poundsToKilos = (number * 0.4535924).toFixed(3)
    return number + " kilos = " + kilosToPounds + " pounds | " 
    + number + " pounds = "
    + poundsToKilos + " kilos"
}

console.log( mass () )
