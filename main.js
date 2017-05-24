
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
  if(ans.length>0){
    ans = math.eval(ans);
    document.getElementById("txtBox").innerHTML = ans;
  }

}

function ACPress(){
  document.getElementById("txtBox").innerHTML = "";
}

function checkLength(){
  for(i=0;i<2;){
    var ans = document.getElementById("txtBox").innerHTML;
    if(ans.length>22){
      document.getElementById("txtBox").innerHTML = "";
    }
  }

}

//BUGS:AFTER = HIT, NEXT INPUT MUST BE OPERATOR OR RESET KEY //IF MORE THAN 22 IN LENGTH ERROR DIGIT
