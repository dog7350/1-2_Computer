/* signout.js */
var user = sessionStorage.getItem("user");
var idarr = JSON.parse(localStorage.getItem("id"));
var pwarr = JSON.parse(localStorage.getItem("pw"));

function cancel() {
  window.location.href = "mypage.html";
}

function deleteacc() {
  var pw = document.getElementById("pw").value;
  if (pw == "") alert("비밀번호를 입력하세요");
  else {
    if (pw == pwarr[user]) {
      var c = confirm("정말로 탈퇴하겠습니까?");
      if (c == true) {
        idarr.splice(user, 1);
        pwarr.splice(user, 1);
        sessionStorage.removeItem("user");
        localStorage.setItem("id", JSON.stringify(idarr));
        localStorage.setItem("pw", JSON.stringify(pwarr));
        alert("탈퇴되었습니다");
        window.location.href = "login.html";
      }
    }
    else alert("비밀번호가 틀렸습니다");
  }
}

window.onload = function() {
  if (user == null) document.write("잘못된 접근입니다");
}
