/* pwchange.js */
var user = sessionStorage.getItem("user");
var pwarr = JSON.parse(localStorage.getItem("pw"));

function cancel() {
  window.location.href = "mypage.html";
}

function changepw() {
  var currpw = document.getElementById("currpw").value;
  var pw = document.getElementById("pw").value;
  var pwconfirm = document.getElementById("pwconfirm").value;
  if (currpw == "" || pw == "" || pwconfirm == "")
    alert("입력하지 않은 칸이 있습니다");
  else {
    if (currpw != pwarr[user]) alert("기존비밀번호가 틀렸습니다");
    else {
      if (currpw == pw) alert("기존비밀번호와 새비밀번호가 같습니다");
      else {
        if (pw == pwconfirm) {
          pwarr[user] = pw;
          localStorage.setItem("pw", JSON.stringify(pwarr));
          alert("비밀번호가 변경되었습니다");
          sessionStorage.removeItem("user");
          window.location.href = "login.html";
        }
        else alert("새비밀번호와 확인이 서로 다릅니다");
      }
    }
  }
}

window.onload = function() {
  if (user == null) document.write("잘못된 접근입니다");
}
