/* nav.js */
$(document).ready(function(){
    var chucunposition = parseInt($(".mainmenu").css('top'));

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 190)
      {
        var newPosition = (scrollTop - 190) + chucunposition + "px";
      } else {
        var newPosition = chucunposition + "px";
      }

      $(".mainmenu").stop().animate({
        "top" : newPosition
      }, 0);
    });
})
