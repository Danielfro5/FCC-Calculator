
function keyPress(key){
  document.getElementById("txtBox").innerHTML += key;
}

function opPress(key){
  var ans = document.getElementById("txtBox").innerHTML.slice(-1);
  var regex = /[+/*-]/g;
  if(ans.length>0 && !ans.match(regex)){
    document.getElementById("txtBox").innerHTML += key;
  }

}

function equalsPress(){
  var ans = document.getElementById("txtBox").innerHTML;
  ans = math.eval(ans);
  document.getElementById("txtBox").innerHTML = ans;
}

function ACPress(){
  document.getElementById("txtBox").innerHTML = "";
}
