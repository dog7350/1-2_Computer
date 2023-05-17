/* m_article_banner.js */
$(document).ready(function(){
    var chucunposition = parseInt($("#article_banner").css('top'));

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 90)
      {
        var newPosition = (scrollTop - 90) + chucunposition + "px";
      } else {
        var newPosition = chucunposition + "px";
      }

      $("#article_banner").stop().animate({
        "top" : newPosition
      }, 300);
    });
})
