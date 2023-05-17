/* signup.js */
var idarr = JSON.parse(localStorage.getItem("id"));
var pwarr = JSON.parse(localStorage.getItem("pw"));
var user;

function check(b) {
  var c = 0;
  if (b.innerHTML == "중복확인") {
    if (user.value == "") {
      alert("아이디를 입력하세요");
    }
    else {
      for (var i in idarr) {
        if (user.value == idarr[i]) c = 1;
      }
      if (c) alert("이미 존재하는 아이디입니다");
      else {
        alert("사용 가능한 아이디입니다");
        user.disabled = true;
        b.innerHTML = "변경";
      }
    }
  }
  else {
    user.disabled = false;
    b.innerHTML = "중복확인";
  }
}

function cancel() {
  window.location.href = "login.html";
}

function signup() {
  if (user.disabled) {
    if (pw.value == pwconfirm.value) {
      idarr = idarr.concat(user.value);
      pwarr = pwarr.concat(pw.value);
      localStorage.setItem("id", JSON.stringify(idarr));
      localStorage.setItem("pw", JSON.stringify(pwarr));
      alert("가입되었습니다");
      window.location.href = "login.html";
    }
    else alert("비밀번호와 확인이 서로 다릅니다");
  }
  else alert("아이디 중복확인을 하세요");
}

window.onload = function() {
  if (sessionStorage.getItem("user") != null) {
    window.location.href = "mypage.html";
  }
  else {
    user = document.getElementById("user");
    pw = document.getElementById("pw");
    pwconfirm = document.getElementById("pwconfirm");
  }
}
