function display(value){
    document.getElementById("output").value += value
}

function erase(){
    document.getElementById("output").value = ''
}

function del(){
    document.getElementById("output").value
     = document.getElementById("output").value.slice(0,-1)
}

function final(){
    document.getElementById("output").value = eval(document.getElementById("output").value)

}
function disp(){
    var a = Math.log10(document.getElementById("output").value);
    document.getElementById("output").value = a
}

function cos(){
    var pii = Math.cos(document.getElementById("output").value*Math.PI/180);
    document.getElementById("output").value = pii;
}

function root(){
var te = Math.sqrt(document.getElementById("output").value)
document.getElementById("output").value = te;
}

function ssin(){
    var si = Math.sin(document.getElementById("output").value*Math.PI/180);
    document.getElementById("output").value = si;
}

function ttan(){
    var ta = Math.tan(document.getElementById("output").value*Math.PI/180);
    document.getElementById("output").value = ta;
}
