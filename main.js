
function keyPress(key){
  checkLength();
  document.getElementById("txtBox").innerHTML += key;
}

function opPress(key){
  checkLength();
  var ans = document.getElementById("txtBox").innerHTML.slice(-1);
  var regex = /[+/*-]/g;
  if(ans.length>0 && !ans.match(regex)){
    document.getElementById("txtBox").innerHTML += key;
  }

}

function equalsPress(){

  var ans = document.getElementById("txtBox").innerHTML;
  if(ans.length>0){
    ans = math.eval(ans);
    document.getElementById("txtBox").innerHTML = ans;
  }

}

function ACPress(){
  document.getElementById("txtBox").innerHTML = "";
}

function checkLength(){
    var ans = document.getElementById("txtBox").innerHTML;
    if(ans.length>16){
      document.getElementById("txtBox").innerHTML = "";
  }



}

//FIX:AFTER = HIT, NEXT INPUT MUST BE OPERATOR OR RESET KEY
