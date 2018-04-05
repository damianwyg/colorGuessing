let num  = 6;
let colors = generateRandomColors(num);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("pickedColorSpan");
let adviceDisplay = document.getElementById("advice");
let h1Display = document.querySelector("h1");
let correctColor = randomizeCorrectColor();
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

setColorsDisplay();

for (let i = 0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove(".selected");
        modeButtons[1].classList.remove(".selected");
        this.classList.add(".selected");
        if (this.textContent === "Easy"){
            console.log("easy");
            num = 3;
        }
        else {
            num = 6;
        }
        resetGame(num);
    })
}
for (let i = 0; i<squares.length; i++) {
    squares[i].addEventListener("click", function () {
        let pickedColor = this.style.backgroundColor;
        if (pickedColor === correctColor) {
            adviceDisplay.textContent = "Correct";
            setColorsDisplay(correctColor);
            resetButton.textContent = "Play Again?"
        }
        else {
           this.style.backgroundColor = "black";
           adviceDisplay.textContent = "Try Again"
        }
    });
}
resetButton.addEventListener("click", function () {
    resetGame(num)
});

function setColorsDisplay(color) {
    if(typeof(color) === "undefined"){
        for (let i = 0; i<squares.length; i++){
            if (i >2 && colors.length === 3){
                squares[i].style.display = "none";
            }
            else {
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            }
        }
        h1Display.style.background = "steelblue";
    }
    else {
        for (let i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
        h1Display.style.background = color;
    }
    colorDisplay.textContent = correctColor;
}

function randomizeCorrectColor() {
    let randomizedColor = Math.floor(Math.random() * colors.length);
    return colors[randomizedColor]
}

function generateRandomColors(numberOfColors) {
    let colorArr = [];
    for (let i = 0; i < numberOfColors; i++){
        //rgb( r, g, b)
        colorArr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ")");
    }
    return colorArr;
}
function resetGame(num) {
    adviceDisplay.textContent = "";
    resetButton.textContent = "Pick color";
    colors = generateRandomColors(num);
    correctColor = randomizeCorrectColor();
    setColorsDisplay();
}
