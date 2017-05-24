var z = 0;

function keyPress(key) {
    checkLength();
    if (z === 0) {
        document.getElementById("txtBox").innerHTML += key;
    } else if (z !== 0){
        document.getElementById("txtBox").innerHTML += "";
    }

}

function opPress(key) {
    checkLength();
    var ans = document.getElementById("txtBox").innerHTML.slice(-1);
    var regex = /[+/*-]/g;
    if (ans.length > 0 && !ans.match(regex)) {
        document.getElementById("txtBox").innerHTML += key;
        z = 0;
    }

}

function equalsPress() {

    var ans = document.getElementById("txtBox").innerHTML;
    if (ans.length > 0) {
        ans = math.eval(ans);
        document.getElementById("txtBox").innerHTML = ans;
        checkLength();
        if(document.getElementById("txtBox").innerHTML.length>0){
          z = 1;
        }


    }
      //checkLength();
}

function ACPress() {

    document.getElementById("txtBox").innerHTML = "";
    z = 0;
}

function checkLength() {
    var ans = document.getElementById("txtBox").innerHTML;
    if (ans.length > 12) {
        document.getElementById("txtBox").innerHTML = "";
    }



}

//bugs 1.reset freezes app. 2.if answer is longer than 12 char doesnt cut off checkLength.
