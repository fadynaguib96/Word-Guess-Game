 var wins = 0;
 var losses = 0;
 var startingScore = 7;



 document.onkeyup = function resetGame() {


     var startGame = String.fromCharCode(event.keyCode).toLowerCase();

     document.getElementById("start").innerHTML = "";

     var options = ["fcbarcelona", "realmadrid", "manchesterunited", "manchestercity", "liverpool", "tottenham", "athleticomadrid", "chelsea", "juventus", "arsenal", "bayernmunich", "acmilan", "intermilan", "ajax", "parissaintgerman", "borussiadortmund"]

     var computerGuess = options[Math.floor(Math.random() * options.length)];

     var computerWord = [...computerGuess];
     console.log(computerWord)
     var guessline = [];
     console.log(guessline)
     for (var i = 0; i < computerGuess.length; i++) {
         guessline[i] = " _ ";
     }
     console.log(guessline)
     var remainingLetters = guessline.length;

     var guesslineJoined = guessline.join("");
     document.getElementById("lines").innerHTML = guesslineJoined;
     var startingScore = 7;
     document.getElementById("tries").innerHTML = startingScore;
     var alreadyGuessed = [];
     document.getElementById("guessedlet").innerHTML = alreadyGuessed;

     var userGuessArr = [];
     console.log(userGuessArr)


     document.onkeyup = function hangMan() {

         document.getElementById("guessmes").innerHTML = "";
         document.getElementById("reset").innerHTML = "";
         document.getElementById("result").innerHTML = "";

         var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

         userGuessArr.push(userGuess)
         console.log(userGuessArr)
         console.log(userGuess)



         if (startingScore > 0) {



             for (var i = 0; i < computerWord.length; i++) {

                 if (computerWord[i] === userGuess) {
                     var isRight = false;

                     guessline[i] = userGuess;
                     guesslineJoined = guessline.join("");
                    
                     remainingLetters--
                    document.getElementById("lines").innerHTML = guesslineJoined;
                    

                 }
             }

             if (isRight !== false) {

               

                 for (var i = 0; i < alreadyGuessed.length; i++) {

                         if (userGuess === alreadyGuessed[i]) {
                                     var isIllegal = false
                                     document.getElementById("guessmes").innerHTML = "You already guesses this letter!";
                                    //  var indLocation = alreadyGuessed.indexOf(userGuess)


                                    
                                    //  alreadyGuessed = alreadyGuessed.join("").replace(alreadyGuessed[indLocation], userGuess).split("");
                                     
                                     
                                    console.log("already guessed: " + alreadyGuessed)
                         

                                 }}

                                 
                                 
                    if (isIllegal !== false) {
                        alreadyGuessed.push(userGuess)
                        startingScore-- 
                    }

                     document.getElementById("guessedlet").innerHTML = alreadyGuessed;
                    
                     document.getElementById("tries").innerHTML = startingScore;


                 }


                 if (computerWord.join("") === guessline.join("")) {

                    
                     wins++
                     document.getElementById("win").innerHTML = wins;
                     document.getElementById("reset").innerHTML = "Start guessing new word!";
                     
                     document.getElementById("result").innerHTML = "You Wiiiiiin!";
                     resetGame();
                 }




             }


                 else {
                     losses++
                     document.getElementById("lose").innerHTML = losses;
                     document.getElementById("reset").innerHTML = "Start guessing new word!"
                     document.getElementById("result").innerHTML = "Sorry, you're out of tries! aka you lost!";
                     resetGame();

                 }





         }


}


