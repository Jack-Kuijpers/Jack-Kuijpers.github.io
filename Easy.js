// Game Logic
async function startGame() {
    // Variable Initialization
    console.log("Game Started"); 
    let numberString = [];
    let score = 0;
    let level = 1;
    let iteration = 0;
    userInput = null;   
    gameOver = false;
    planet1()
    planet2()

    numberString = generateNumberArray();
    console.log("Generated Number String: ", numberString)

     async function generatePlanets() {
        if(level !== 1){
            iteration = 0;
            numberString = generateNumberArray();
            console.log("Generated Number String: ", numberString)
            document.getElementById("score").innerText = `Score: ${level - 1}`;
            document.getElementById("level").innerText = `Level: ${level}`;
        }
        for (let index = 0; index < numberString.length; index++) {
            dimPlanet(numberString[index]);
            console.log("Dimming Planet: ", numberString[index]);
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
    }
    // Display the number string
    generatePlanets();
    

// Function to handle the click event on planet1
function planet1() {
    const planet1div = document.getElementsByClassName("planet1");
    planet1div[0].addEventListener("click", () => {
        userInput = 1;
        console.log("User Input: ", userInput);
        // You may need to pass numberString and level as arguments or make them global
        if (userInput === numberString[iteration] && gameOver === true) {
            iteration++;
            console.log("Correct! Score: ", score);
            if(iteration === level){
                level ++;
                generatePlanets();
            }
            // Proceed to the next iteration or level
            
        } else {
            console.log("Wrong! Game Over");
             gameOver = true;
              endGame()
            // Handle game over logic
        }
    });
}
function planet2() {
    const planet2 = document.getElementsByClassName("planet2");
    planet2[0].addEventListener("click", () => {
        userInput = 2;
        console.log("User Input: ", userInput);
        // You may need to pass numberString and level as arguments or make them global
        if (userInput === numberString[iteration] && gameOver === true) {
            iteration++;
            console.log("Correct! Score: ", score);
            if(iteration === level){
                level ++;
                generatePlanets();
            }
            // Proceed to the next iteration or level
        } else {
            console.log("Wrong! Game Over");
             gameOver = true;
              endGame()
            // Handle game over logic
        }
    });
}











function dimPlanet(index){
    // Dims the planet div at the given index
    const planetDiv = document.getElementsByClassName(`planet${index}`);
    console.log(`planet${index}`);
    planetDiv[0].style.opacity = "1"; // Dims the planet
    planetDiv[0].style.transition = "opacity 0.5s"; // Smooth transition for dimming
    setTimeout(() => {
        planetDiv[0].style.opacity = "0.5"; // Restores the opacity after 0.5 seconds
    }, 500);    
}

// Random Number Generation
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 2) + 1; //This is for easy mode ( Hard mode will have it be 4)
    return randomNumber;
}

// Number Array Generation
function generateNumberArray(){
// Clear the previous numberString
    let numberString = [];
    for (let index = 0; index < level; index++) {
        let tempNumber = generateRandomNumber();
        numberString.push(tempNumber);
    }
    return numberString;  
}
function endGame(){
    const gameOverbtn = document.getElementById("startGame");
    gameOverbtn.innerHTML = "Game Over! Click to Restart";
}

}





// NOTES
// DOM Manipulation --> dim the div not used
