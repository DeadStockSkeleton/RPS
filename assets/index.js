$(document).ready(function(){
    $("#startBtn").click(function(e){
        var rounds = 0;
        rounds += 1;
        $('#rounds').text(rounds)
        $('#start').fadeOut(500);
        $('#game').fadeIn(500);
        game();
    })

    $('#restart').click(function(){
        location.reload();
        return false;
    })

    function game(){
        $("input[name='choice']").on('click',function(){
            var picked = $(this).val();
            $('#chosen').html(picked);
    
            if($("input[name='choice']:checked")){
              $('#choose').prop("disabled", false);
            }
            else{
                $('#choose').prop("disabled", true);
            }
    
        })
    
        $('#choose').on('click',function(e){
            var userScore = 0;
            var comScore = 0;
            e.preventDefault();
            if($("input[name='choice']:not(checked)")){
                $("input[name='choice']:not(checked)").prop("disabled", true);
            }
            else(
                $("input[name='choice']:checked").prop("disabled", false)
            ) 
            const selection = $("input[name='choice']:checked").val();   
            $('#game').fadeOut(500);
    
            const com = ["Rock", "Paper", "Scissors"];
    
            const comChoice = com[Math.floor(Math.random()*com.length)];
    
            function fight(){
                if (selection === comChoice){
                    
                        $('#user').toggleClass("usertie");
                        $('#comID').toggleClass("comtie");
                        $('#matchStatus').fadeIn();
                        setTimeout(function(){ 
                            $('#resultsPage:hidden').first().fadeIn( "slow" );
                        }, 2000); 
                        $('#specsr').text(selection);
                        $('#comSpecsr').text(comChoice); 
                        $('#resultsTXT').text("TIE")            
                }
                else if (selection === "Rock" && comChoice === "Paper"){
                        $('#user').toggleClass("usertie");
                        $('#comID').toggleClass("comwin");
                        setTimeout(function(){ 
                            $('#resultsPage:hidden').first().fadeIn( "slow" );
                        }, 2000); 
                        $('#specsr').text(selection);
                        $('#comSpecsr').text(comChoice); 
                        $('#resultsTXT').text("YOU LOSE");
                }
                else if (selection === "Rock" && comChoice === "Scissors"){
                        $('#user').toggleClass("userwin");
                        $('#comID').toggleClass("comtie");
                        setTimeout(function(){ 
                            $('#resultsPage:hidden').first().fadeIn( "slow" );
                        }, 2000); 
                        $('#specsr').text(selection);
                        $('#comSpecsr').text(comChoice); 
                        $('#resultsTXT').text("YOU WIN")
                }
                else if (selection === "Paper" && comChoice === "Scissors"){
                    $('#user').toggleClass("usertie");
                    $('#comID').toggleClass("comwin");
                    setTimeout(function(){ 
                        $('#resultsPage:hidden').first().fadeIn( "slow" );
                    }, 2000); 
                    $('#specsr').text(selection);
                    $('#comSpecsr').text(comChoice); 
                    $('#resultsTXT').text("YOU LOSE")
                }
                else if (selection === "Paper" && comChoice === "Rock"){
                    $('#user').toggleClass("userwin");
                    $('#comID').toggleClass("comtie");
                    setTimeout(function(){ 
                        $('#resultsPage:hidden').first().fadeIn( "slow" );
                    }, 2000); 
                    $('#specsr').text(selection);
                    $('#comSpecsr').text(comChoice); 
                    $('#resultsTXT').text("YOU WIN")
                }
                else if (selection === "Scissors" && comChoice === "Rock"){
                    $('#user').toggleClass("usertie");
                    $('#comID').toggleClass("comwin");
                    setTimeout(function(){ 
                        $('#resultsPage:hidden').first().fadeIn( "slow" );
                    }, 2000); 
                    $('#specsr').text(selection);
                    $('#comSpecsr').text(comChoice); 
                    $('#resultsTXT').text("YOU LOSE")
                }
                else if (selection === "Scissors" && comChoice === "Paper"){
                    $('#user').toggleClass("userwin");
                    $('#comID').toggleClass("comtie");
                    setTimeout(function(){ 
                        $('#resultsPage:hidden').first().fadeIn( "slow" );
                    }, 2000); 
                    $('#specsr').text(selection);
                    $('#comSpecsr').text(comChoice); 
                    $('#resultsTXT').text("YOU WIN")
                }
            }
    
            setTimeout(function(){ 
                $('#com').fadeOut(500); 
                fight();
            }, 5000);
    
    
            if (selection === "Rock"){
                $('#specs').text(selection);
                $('#choiceIMG').attr("src", './assets/icns/rock-icn.svg');
            }
            else if (selection === "Paper"){
                $('#specs').text(selection);
                $('#choiceIMG').attr("src", './assets/icns/paper-icn.svg');
            }
            else if (selection === "Scissors"){
                $('#specs').text(selection);
                $('#choiceIMG').attr("src", "./assets/icns/scissors-icn.svg");
            }
    
            if (comChoice === "Rock"){
                $('#comSpecs').text(comChoice);
                $('#ComchoiceIMG').attr("src", './assets/icns/rock-icn.svg');
            }
            else if (comChoice === "Paper"){
                $('#comSpecs').text(comChoice);
                $('#ComchoiceIMG').attr("src", './assets/icns/paper-icn.svg');
            }
            else if (comChoice === "Scissors"){
                $('#comSpecs').text(comChoice);
                $('#ComchoiceIMG').attr("src", "./assets/icns/scissors-icn.svg");
            }
    
    
            
                
            
            
    
        })
    
        const userScore = $("#userScore");
        const comScore = $("comScore");   
    }

    
});