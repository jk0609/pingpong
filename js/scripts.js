$(document).ready(function(){
//Business Logic
//checks if input contains any non-numeric characters, allows commas and periods
function check(input){
  var numberSearch = /[^0-9,.]/;
  if(numberSearch.test(input)){
    return false;
  }
  else{
    return true;
  }
}
//removes commas, rounds floating point numbers. loops through numbers up to input, processes and pushes numbers to array 'list'.
function pingPong(number){
  number = Math.round(parseFloat(number.replace(/,/g,"")));
  var list = [];
  for(i=1;i<=number;i++){
    if(i%15===0){
      list.push('ping-pong');
    }
    else if(i%5===0){
      list.push('pong');
    }
    else if(i%3===0){
      list.push('ping');
    }
    else{
      list.push(i);
    }
  }
  return list;
}

//UI Logic
$('#numberForm').submit(function(event){
  $('#output').empty();
  var input = $('#numberInput').val();
  if(!check(input)){
      $('#output').append('<p>Please enter a valid number</p>')
  }
  else{
    var answer = pingPong(input);
    console.log(answer);
    for(i=0;i<answer.length;i++){
      $('#output').append('<li>'+answer[i].toString()+'</li>')
    }
  }
  event.preventDefault();
});

});
