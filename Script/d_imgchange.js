/* d_imgchange.js */
var num = 0;

function changeover(metag, name){
  metag.src = "IMG/" + name + "_over.png";
}
function changeout(metag, name){
  metag.src = "IMG/" + name + "_out.png";
}

function changedown(metag, name){
  metag.src = "IMG/" + name + "_down.png";
}
function changeup(metag, name){
  metag.src = "IMG/" + name + "_out.png";
}

function backcolorover(metag){
  metag.style.backgroundColor = 'orange';
}
function backcolorout(metag){
  metag.style.backgroundColor = 'white';
}

function logo_interval(){
  num++;
  num %= 3;
  timer = setTimeout(logochange, 10);
}

function logochange(){
  logo = document.getElementById("logo");
  if(num == 0)
  {
    logo.src = "#";
    logo.style.backgroundColor = "red";
  }
  else if(num == 1)
  {
    logo.src = "#";
    logo.style.backgroundColor = "blue";
  }
  else if(num == 2)
  {
    logo.src = "#";
    logo.style.backgroundColor = "green";
  }

  logo_interval();
}
function clear_logo_interval(){
  logo = document.getElementById("logo");
  clearTimeout(timer);
  logo.style.backgroundColor = "white";
  logo.src = "IMG/logo_out.png";
}
