let reverse
let menuOpen = false

$(document).ready(function() {

  // shrinks logo on scroll
  $(window).scroll(function () {
      
    if ($(window).scrollTop() > 74) {
        $('#nav-bar').addClass('navbar-fixed');
        $('.logo').addClass('logo-shrink');
        $('.main-content').addClass('maincontent-margin');
        $('.icon').addClass('scroll-icon');

        if (menuOpen == true){
          $('.banner').addClass('scroll-banner');
          $('.logo').addClass('logo-move');
        }
    }
    if ($(window).scrollTop() < 75) {
        $('#nav-bar').removeClass('navbar-fixed');
        $('.logo').removeClass('logo-shrink');
        $('.main-content').removeClass('maincontent-margin');
        $('.icon').removeClass('scroll-icon');
        
        if (menuOpen == true){
          $('.banner').removeClass('scroll-banner');
          $('.logo').removeClass('logo-move');
        }
    }
  });

  if ($(window).width() < 630) {
        var menu = document.getElementById("menu-reverse");
        var i = menu.childNodes.length;
        while (i--)
        menu.appendChild(menu.childNodes[i]);
        reverse=true;
    }
  else {
    reverse=false
  }

  if (menuOpen == true){
    if ($(window).scrollTop() < 75) {$('.logo').removeClass('logo-move');}
    if ($(window).scrollTop() > 74) {$('.logo').addClass('logo-move');}
  }

});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav");
      if (x.className === "nav-bar") {
          x.className += " responsive";
          menuOpen = true;
          if ($(window).scrollTop() > 74){
            $('.banner').addClass('scroll-banner');
            $('.logo').addClass('logo-move');
          }
      } else {
          x.className = "nav-bar";
          menuOpen = false;
          $('.banner').removeClass('scroll-banner');
          $('.logo').removeClass('logo-move');
      }

  }

$(window).resize(function() {
  if ($(window).width() < 630) {
    console.log('less than 630');
    if (menuOpen == true){
          $('.logo').addClass('logo-move');
        }
    if (reverse==false){
      var menu = document.getElementById("menu-reverse");
      var i = menu.childNodes.length;
      while (i--)
      menu.appendChild(menu.childNodes[i]);
     reverse=true;
    }
  }
 else{
  console.log('more than 630');
  if (menuOpen == true){
          $('.logo').removeClass('logo-move');
        }
  if (reverse==true){
    var menu = document.getElementById("menu-reverse");
    var i = menu.childNodes.length;
    while (i--)
    menu.appendChild(menu.childNodes[i]);
   reverse=false;
  }
 }
});