/* login.js */

  var idarr = [];
  var pwarr = [];
  var idtemp = localStorage.getItem("idtemp");

  function login() {
    var user = document.getElementById("user").value;
    var pw = document.getElementById("pw").value;
    correctid = -1;
    for(var i in idarr) {
      if(user == idarr[i]) correctid = i;
    }
    if(user == "") alert("아이디를 입력하세요");
    else {
      if(pw == "") alert("비밀번호를 입력하세요");
      else if(correctid != -1 && pw == pwarr[correctid]) {
        sessionStorage.setItem("user", correctid);
        var cb = document.getElementById("cb").checked;
        if (cb) localStorage.setItem("idtemp", user);
        else localStorage.removeItem("idtemp");
        window.location.href = "mypage.html";
      }
      else {
        alert("아이디나 비밀번호가 틀렸습니다");
      }
    }
  }

  function signup() {
    window.location.href = "signup.html";
  }

  window.onload = function() {
    if (sessionStorage.getItem("user") != null) {
      window.location.href = "mypage.html";
    }
    else {
      if (localStorage.getItem("id") != null) {
        idarr = JSON.parse(localStorage.getItem("id"));
        pwarr = JSON.parse(localStorage.getItem("pw"));
      }
      else {
        idarr[0] = "admin";
        pwarr[0] = "1234";
        localStorage.setItem("id", JSON.stringify(idarr));
        localStorage.setItem("pw", JSON.stringify(pwarr));
      }
    }
    if (idtemp != null) {
      document.getElementById("user").value = idtemp;
    }
  }
