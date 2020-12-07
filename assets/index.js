$(document).ready(function(){
    $("#startBtn").click(function(e){
        var rounds = 0;
        rounds += 1;
        $('#rounds').text(rounds)
        $('#start').fadeOut(500);
        $('#game').fadeIn(500);
    })

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

        const com = ["Rock", "Paper", "scissors"];

        const comChoice = com[Math.floor(Math.random()*com.length)];
        alert(comChoice);

        setTimeout(function(){ 
            $('#com').fadeOut(500); 
            
        }, 5000);


        
            
        
        

    })

    const userScore = $("#userScore");
    const comScore = $("comScore");
});