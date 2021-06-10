let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let start = document.querySelector("#start");
let welcome = document.querySelector("#welcome");


// Variables for score 
let interval = null;
let playerScore = 0;
let count = 0;
let initialInterval = 200; // this is the interval at which the score increases

// function for score 
let ScoreCount = () => {
    playerScore++;
    score.innerHTML = `SCORE <b> : ${playerScore} </b>`;
    console.log(playerScore);
    initialInterval--;
}


// Starting the game 

window.addEventListener("keydown" , (evt) => {
    if (evt.code == "Space" ) {
        gameOver.style.display = "none";
        start.style.display = "none";
        welcome.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        // Score 
        let playerScore = 0;
        interval = setInterval(ScoreCount,initialInterval);
        // if (block.classList != "blockActive") {
        //     interval = setInterval(ScoreCount,200);
        // }
        
    }
});

// Jumping the charachter

window.addEventListener("keydown" , (evt) => {
    if (evt.code == "ArrowUp") {
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");
            setTimeout(() => {
                // removing the class after 0.5 seconds 
                dino.classList.remove("dinoActive");
            },500);
        }
    }
});

// Ending the game when the charachter hits or touches the blocks 

let result = setInterval(() => {

    let dinoLeft = parseInt(getComputedStyle(dino).getPropertyValue("left")); // x-axis of the dino

    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom")); // y-axis or bottom of dino

    let dinoWidth = parseInt(getComputedStyle(dino).getPropertyValue("width")); // width of the dino

    let dinoHeight = parseInt(getComputedStyle(dino).getPropertyValue("height")); // height of the dino

    let blockHeight = parseInt(getComputedStyle(block).getPropertyValue("height")); // height of the dino

    let blockWidth = parseInt(getComputedStyle(block).getPropertyValue("width")); // width of the obstacles

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left")); // x-axis of the obstacle

    let blockBottom = parseInt(getComputedStyle(block).getPropertyValue("bottom")); // y-axis or bottom of dino

    // if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        
    //     gameOver.style.display = "block";
    //     block.classList.remove("blockActive");
    //     road.firstElementChild.style.animation = "none";
    //     cloud.firstElementChild.style.animation = "none";
    //     clearInterval(interval);
    //     playerScore = 0;
    //     count = 1;
    // }
    
    if (dinoLeft < blockLeft + blockWidth && dinoLeft + dinoWidth > blockLeft && dinoBottom < blockBottom + blockHeight && dinoBottom + dinoHeight > blockBottom) {

        gameOver.style.display = "block";
        start.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }

},10);
