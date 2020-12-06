const rock = document.getElementById('rockChoice');
const paper = document.getElementById('paperChoice');
const scissors = document.getElementById('scissorsChoice');
var choices = document.getElementsByClassName('choice');

var form = document.getElementById('choicesForm');
form.onsubmit = function(e){
    e.preventDefault();
    for (var i = 0; i < choices.length; i++){
       if (choices[0].checked === true){
           alert(choices);
       }
    }
    
}

function enableBtn(){
    var submit = document.getElementById('submit');
    submit.disabled = false;

}
