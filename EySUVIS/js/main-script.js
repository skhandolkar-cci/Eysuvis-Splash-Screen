window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
    var yscroll = $(".safety").scrollTop();
    if (pageYOffset >= yscroll) {
      $(".safety-info").addClass("d-none");
      $(".safety").removeClass("d-none");
    }
    if (pageYOffset <= yscroll) {
        $(".safety-info").removeClass("d-none");
        $(".safety").addClass("d-none");
    }
 }
 function openSection() { 
     var sectionTo = $(".safety");
     $(".safety-info").addClass("d-none");
     $(".safety").removeClass("d-none");
     $(".safety").addClass("sticky-info");
     $('h1').addClass("d-none");
     $('header').addClass("d-none");
     $('footer').addClass("d-none");
     $(".down-arrow-icon").removeClass("d-none");
     $('html, body').animate({
     scrollTop: $(sectionTo).offset().top
     }, 0);
 }
 function closeSection() { 
  $(".safety-info").removeClass("d-none");
  $(".down-arrow-icon").addClass("d-none");
  $('h1').removeClass("d-none");
  $("header").removeClass("d-none")
  $('footer').removeClass("d-none");
  $(".safety").removeClass("sticky-info");
  $('html, body').animate({
  scrollTop: $('header').offset().top
  },0);
}