var player = true;
var types = [
  ".r1",".r2",".r3",".c1",".c2",".c3",".d1",".d2"
];
document.querySelectorAll(".tile").forEach(item => {
  item.addEventListener("click", function() {
    if (item.innerText === "") {
      if (player) {
        item.innerText = "x";
      } else {
        item.innerText = "o";
      }
      if(calculateWin()){
        document.querySelectorAll(".tile").forEach(item=>{
          item.innerText = "";
        });
      }
      else{
        changePlayer();
      }
    }
  });
});

function changePlayer() {
  player = !player;
  if (player) {
    document.getElementById("playerName").innerText = "Player1";
  }
  else{
    document.getElementById("playerName").innerText = "Player2";
  }
}

function tie(){
  var tied = true;
  document.querySelectorAll(".tile").forEach(item => {
    if(item.innerText === ""){
      tied = false;
    }
  });
  return tied;
}

function calculateWin(){
  for (var variable in types) {
    var count1 = 0;
    var count2 = 0;
    document.querySelectorAll(types[variable]).forEach(item=>{
      if(player && item.innerText==="x"){
        count1++;
      }
      if(!player && item.innerText==="o"){
        count2++
      }
    });
    if(count1===3){
      document.getElementById("playerName").innerText = "Player1 Wins(Starts)";
      return true;
    }
    if(count2===3){
      document.getElementById("playerName").innerText = "Player2 Wins(Starts)";
      return true;
    }
  }
  if(tie()){
    document.getElementById("playerName").innerText = "Player Tie(Player1 Starts)";
    return true;
  }
  return false;
}
