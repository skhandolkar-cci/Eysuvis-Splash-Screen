window.onscroll = function() {myFunction()};
 function myFunction() {
    if (pageYOffset > 140) {
      $(".safety-info").addClass("d-none");
      $(".safety").removeClass("d-none")
    }
    else {
      $(".safety-info").removeClass("d-none");
      $(".safety").addClass("d-none");
    }
 }
 function onScroll() { 
     var sectionTo = $(".safety-information");
     $(".safety-info").addClass("d-none");
     $(".safety").removeClass("d-none");
     $('html, body').animate({
     scrollTop: $(sectionTo).offset().top
     }, 500);
 }