$(document).ready(function(){
  $.getJSON('scripts/leaderboard-v2.json', function(json){
    var players = json.leaderboard.players;

    for(var i = 0; i< players.length; i++){
      var total = 0;
      var firstName = players[i].player_bio.first_name;
      var lastName = players[i].player_bio.last_name;
      var fullName = firstName +' '+ lastName;
      var rounds = players[i].rounds;

      // console.log(fullName);
      $('.names').append('<li>'+fullName+'<button onClick="options()">Select</button></li>');
      $('.scores').append('<li>'+fullName+'</li>');
      for(var x = 0; x<rounds.length; x++){
        var strokes = rounds[x].strokes;
        // console.log(strokes);
        total += strokes;
      }
      // console.log(total);
      $('.scores').append('<p>'+total+'</p>');
    }
  });
});
function options(){
  console.log(document.getElementsByTagName('li'));
}
