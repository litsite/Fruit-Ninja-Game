var playing = false;
var score;
var timeremaining;
var action;
var correctAnswer;


//if we click on the start/reset button then..
    
document.getElementById("startreset").onclick = function(){
    
    //if the maths game is in play
        //then reload page
    
    if(playing == true){
        location.reload();
    }else{
        
        
        //If the maths game is not in play then
        playing = true;
        
        //set score to 0    
        score = 0; 
        document.getElementById("score-value").innerHTML = score;
        

        //Show the Count down box that is hidden
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 30;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide gameover box
        document.getElementById("gameover").style.display = "none";
        
        //reduce the time by 1 second in loops (create function)
        startCountdown();
        
        
        
        //change start/reset button to reset
        document.getElementById("startreset").innerHTML = "Reset Game"
        
        generateQA();
        
        // clicking on an answer box
        for(i =1; 1<5; i++){
            document.getElementById("box" + i).onclick = function (){
            if(playing == true){
                if(this.innerHTML == correctAnswer){
                    
                    //increase score by 1
                   score++;
                    document.getElementById("score-value").innerHTML = score;
                        //hide wrong box and show correct box
                    document.getElementById("wrong").style.display = "none";
                    document.getElementById("correct").style.display = "block";
                    setTimeout(function(){
                        document.getElementById("correct").style.display = "none";
                    },1000);
                    
                    //generate new question
                    generateQA();
                    
                    
                    
                   }else{
                       //wrong answer
                       
                       document.getElementById("correct").style.display = "none";
                    document.getElementById("wrong").style.display = "block";
                    setTimeout(function(){
                        document.getElementById("wrong").style.display = "none";
                    },1000);
                       
                   }
               
               }
        }
        }
        
        
        function startCountdown(){
           action = setInterval(function(){
                timeremaining -= 1 ;
                document.getElementById("timeremainingvalue").innerHTML = timeremaining;   
               
            //if the time has hit 0 then its gameover
            //if time is has not hit zero then keep playing
        
               if(timeremaining ==0){
                   stopCountdown();
                   document.getElementById("gameover").style.display = "block";
                   document.getElementById("gameover").innerHTML = "<p>GAME OVER!</p><p>YOUR SCORE IS " + score + " </p>";
                   
                   document.getElementById("timeremaining").style.display = "none";
                   
                   
                   playing = false;
                   
                  
                  }
            }, 1000);
        }
        
        function stopCountdown(){
            clearInterval(action);
        }
        
       
        }
    function generateQA(){
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());
        correctAnswer = x*y;
        document.getElementById("question").innerHTML = x + "X" + y;
        var correctPosition = 1 + Math.round(3*Math.random());
        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
        
        //fill other boxes with wrong answer
        //var answers[correctAnswer];
        
        for(i=1; i<5; i++){
            if(i !== correctPosition ){
                var wrongAnswer;
                
                wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
                document.getElementById("box"+i).innerHTML = wrongAnswer;
                
                        
            }
            
        }
        
    }
    }
    

