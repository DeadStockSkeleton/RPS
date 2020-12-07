$(document).ready(function(){
    $("#startBtn").click(function(e){
        $('#rounds').text('1');
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
        e.preventDefault();
        if($("input[name='choice']:not(checked)")){
            $("input[name='choice']:not(checked)").prop("disabled", true);
        }
        else(
            $("input[name='choice']:checked").prop("disabled", false)
        )     
        $('#game').fadeOut(500);
        var selection = ("input[name='choice']:checked").val();
    })
});