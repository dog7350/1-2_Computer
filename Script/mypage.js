/* mypage.js */
var user = sessionStorage.getItem("user");
var idarr = JSON.parse(localStorage.getItem("id"));

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "login.html";
}

function changepw() {
  window.location.href = "pwchange.html";
}

function deleteacc() {
  window.location.href = "signout.html";
}

window.onload = function() {
  var text = document.getElementById("text");
  var delbutton = document.getElementById("delbutton");
  if (user == null) window.location.href = "login.html";
  else text.innerHTML = idarr[user] + "님 안녕하세요";
  if (!parseInt(user)) delbutton.style.display = "none";
}
