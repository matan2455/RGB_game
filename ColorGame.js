//extrect responsive features from html
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var answer = document.querySelector(".answer");
var resetButton = document.querySelector("#newColors");
var jumbotron = document.querySelector(".jumbotron");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

var result = 0;
var randomNumbers = [0];
var pickedColor = 0;
var count = 0;

resetGame();

//OUR MAIN FUNCTION - refresh the game.
function resetGame() {
    //set new random color
    count++;
    result = getNumber(squares.length);
    randomNumbers = generateRandomColors(squares.length);
    pickedColor = randomNumbers[result];
    console.log(result + ", " + pickedColor);
    //assign that color to a square in the same index
    squares[result].style.backgroundColor = pickedColor;
    //change the header text-content to match the new color
    colorDisplay.textContent = pickedColor;
    setSquares();
}


function setSquares() {
    //set all remaining to their corosponding random colors and add functionalty.
    for (var i = 0; i < squares.length; i++) {
        //add initial color to the squares.
        if (i !== result) {
            squares[i].style.backgroundColor = randomNumbers[i];
        }
        //set squares functionality.
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            //if player choose the right square. change all squares color to match the correct color.
            if (clickedColor === pickedColor) {
                jumbotron.style.background = clickedColor;
                changeColor(pickedColor);
                answer.textContent = "Correct!";
                resetButton.textContent = "play again?";
                //if the player choose the wrong square, set square color to background.
            } else {
                this.style.backgroundColor = "#232323";
                answer.textContent = "Try again!";
            }
        });
    }
}
//set all squares in the array to correct color.
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

easyButton.addEventListener("click", function() {
    count--;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.backgroundColor = "#232323";
    }
    colors = generateRandomColors[3];
    squares = document.querySelectorAll("#easy");
    result = getNumber(3);
    resetGame();
})

hardButton.addEventListener("click", function() {
    count--;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    squares = document.querySelectorAll(".square");
    resetGame();
})

//if resetButton is pushed - resets the game
resetButton.addEventListener("click", function() {
    answer.textContent = "game number " + count;
    if (resetButton.textContent === "New Colors") {
        count--;
    } else {
        resetButton.textContent = "New Colors";
        console.log("change");
    }
    jumbotron.style.backgroundColor = "#12b1f5";
    resetGame();
});

//randomly select red, green and blue shades, and return RGB String.
function getRandomcolor() {
    //random red color
    var r = Math.floor(Math.random() * 256);
    //random green color
    var g = Math.floor(Math.random() * 256);
    //random blue color
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//randomize a number.
function getNumber(length) {
    var num = (Math.random() * length);
    return Math.floor(num);
}

//generates an array of random RGB Strings.
function generateRandomColors(num) {
    var array = new Array;
    for (var i = 0; i < num; i++) {
        array[i] = getRandomcolor();
    }
    return array;
}