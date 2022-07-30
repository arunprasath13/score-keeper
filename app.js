const playerOne = document.querySelector("#player-1");   // first player button
const playerTwo = document.querySelector("#player-2");  // second player button
const reset = document.querySelector("#reset");         // rest button for to start again first
const playeronescore = document.querySelector("#playeronescore");  // First player score
const playertwoscore = document.querySelector("#playertwoscore");  // second player score
const scoreNumbers = document.querySelector("#playto")


let iplayeronescore = 0,iplayertwoscore = 0;   // Initilising playerOne and playerTwo to 0



scoreNumbers.addEventListener("change",()=> {
    const winningScore = scoreNumbers.value; 
    console.log(winningScore);
     
});


playerOne.addEventListener("click", () => {        // Just adding addEventListner to first button      
    playeronescore.innerHTML = iplayeronescore;    
 })


playerTwo.addEventListener("click", () => {          // Just adding addEventListner to first button
    iplayertwoscore++;
    playertwoscore.innerHTML = iplayertwoscore;
 })


 function checkScore(){
    if(iplayeronescore == winningScore){
        alert("Player-1 won!!!")
    }
 }



//  reset.addEventListener("click",resetBtn);



// function logic(){

// }

// function resetBtn(){

// }



// function csslogic(){

// }