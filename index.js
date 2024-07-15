const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

const buttonEl = document.getElementById("button-el")
const rectangleOne = document.getElementById("rectangle1")
const rectangleTwo = document.getElementById("rectangle2")

buttonEl.addEventListener("click", function(){
    generateRandomCharacter()
    generateRandomPassword() 
    const randomPasswordOne = generateRandomPassword()
    const randomPasswordTwo = generateRandomPassword()
    rectangleOne.textContent = randomPasswordOne
    rectangleTwo.textContent = randomPasswordTwo
})

function generateRandomCharacter(){
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}
function generateRandomPassword(){
    let randomPassword = ""
    rectangleOne.textContent = randomPassword
    for(let i=0; i<passwordLength ; i++){
        randomPassword += generateRandomCharacter()
    }
    return randomPassword
}

rectangleOne.addEventListener("click", function(){
    copyText(rectangleOne,"rectangle1")
})

rectangleTwo.addEventListener("click", function(){
    copyText(rectangleTwo,"rectangle2")
})

function copyText(anyOne,id) {
  window.getSelection().removeAllRanges();
  const range = document.createRange()
  range.selectNode(anyOne)
  window.getSelection().addRange(range)
  document.execCommand("copy")
  alert("Text has been copied!")
  var divElement = document.getElementById("copytextid")
}




