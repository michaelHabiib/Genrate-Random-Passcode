
const myButton = document.querySelector("button");
myButton.addEventListener("click", function () {
    const myArray = ["A","B","C","D","E","F","G","H","K","L","M","N","O","P","Q","J","U","S","B","X","Z","W","V","Y","R","!","2","#","$","%","&","*","+","-","1","2","3","4","5","6","7","8","9","0"]
    const mySpan = document.querySelector("span");
    const myIcon = document.querySelector("i")
    let passcode = ""
    for (let i=0; i<6; i++) {
        const randomNumber = Math.floor(Math.random()*myArray.length)
        passcode = passcode + myArray[randomNumber]
    }
    mySpan.innerHTML = passcode
});