const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.getElementById("generate-btn")
let passwordEl = document.getElementById("password-el")
let passwordsEl = document.getElementById("passwords-el")
 generateBtn.addEventListener ("click", function() {
    gen()
    pen()
 })

function gen() {
    let random = ""
    for(let i = 0; i < 15; i++) {
      random += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordEl.textContent = random
}

function pen() {
    let rand = ""
    for(let i = 0; i < 15; i++) {
      rand += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordsEl.textContent = rand
}
