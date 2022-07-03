var playing = false;
var score;
var trialsLeft;
var timeLeft = 29;
var step;
var action; //used for setInterval action
var fruits = ['apple', 'banana', 'cherries', 'grape', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

            
            
$(function(){
    $("#startreset").click(function(){
        
        //we are playing
        if(playing == true){
            //reload page
            location.reload();
        }else{
            
            //we are not playing
            playing = true; // game initiated
            
            //set score to 0
            score = 0; //set score to 0
            $("#score-value").html(score);
            
            //show trials left
            $("#trialsleft").show();
            trialsLeft = 3;
            addHearts();
			
            //hide game over box
            $("#gameOver").hide();
            
			//change button text to reset game
			$("#startreset").html("Restart");
            
            
            //countdown
            
        countdown = setInterval(function(){
            $("#time-value").html(timeLeft);
            timeLeft--;
            if(timeLeft== -1){
                clearInterval(countdown);
                playing=false;// we are not playing anymore
                $("#startreset").html("Start");//change button to start game
                       
                       $("#gameOver").show();
                       $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                       $("#trialsleft").hide();
                       stopAction();
                timeLeft = 30;
            }
        }
                                ,1000);
			
			//start sending fruits
			startAction();	
			
        }
    }); 
    
    
    $("#fruit1").mouseover(function(){
        score++;
        $("#score-value").html(score);
        
        //stop fruit
      clearInterval(action);
        
        //hide fruit
        $("#fruit1").hide("explode",500); //slice fruit
        
        //send new fruit
        
        setTimeout(startAction,500);
    });


    //FUNCTIONS
    function addHearts(){
        $("#trialsleft").empty(); //empty empties out any html elements
        for(i=0; i < trialsLeft; i++){
            $("#trialsleft").append('<img src="Images/heart1.png" class="life">');
        }
    }
    
    //start sending fruits
    function startAction(){
        
        
        //generate a fruit
        $("#instruction").show();
       $("#fruit1").show();
        chooseFruit(); //choose a random fruit
        $("#fruit1").css({'left' :Math.round(550*Math.random()), 'top':-50});
        
        //generate a random step
        step = 1 + Math.round(5*Math.random());//Change step
        
        //Move fruit down by one step every 10ms
        action = setInterval(function(){
            //move step by one step
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            
            //check if the fruit is too low
            if($("#fruit1").position().top > $("#fruitsContainer").height()){
               //Check if we have any trials left
                if(trialsLeft > 1){
                           //generate a fruit
        
       $("#fruit1").show();
        chooseFruit(); //choose a random fruit
        $("#fruit1").css({'left' :Math.round(550*Math.random()), 'top':-50});
        
        //generate a random step
        step = 1 + Math.round(5*Math.random());//Change step
                    //reduce trials by one
                    trialsLeft --;
                    //populate trialsLeft box
                    addHearts();
                    
                   }else{//game over
                       playing=false;// we are not playing anymore
                       
                       $("#startreset").html("Restart");//change button to start game
                       
                       $("#gameOver").show();
                       $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                       $("#trialsleft").hide();
                       
                       stopAction();
                       clearInterval(countdown);
                   }
               }    
        }, 10);
        
        countdown;
    }

//generate a random fruit
function chooseFruit(){
$("#fruit1").attr('src','Images/' + fruits[Math.round(8*Math.random())]+'.png');
}


//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    $("#instruction").hide();
}
    });
