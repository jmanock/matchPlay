$(document).ready(function(){
  $.getJSON('scripts/leaderboard-v2.json', function(json){
    var players = json.leaderboard.players;
    for(var i = 0; i< players.length; i++){
      var firstName = players[i].player_bio.first_name;
      var lastName = players[i].player_bio.last_name;
      var fullName = firstName +' '+ lastName;
      
    }
  });
});
