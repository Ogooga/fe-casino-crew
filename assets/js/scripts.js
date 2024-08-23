$(document).ready(function () {
  // toggle nav menu
  $(".hamburger.hamburger3").click(function () {
    const navMenu = $(".nav-menu__ctn");
    const nav = $("nav");
    navMenu.toggleClass("d-none");
    nav.toggleClass("open-nav");
  });

  // toggle nav dropdown
  $(".nav-item-toggler").click(function () {
    const navItem = $(this).parent();
    const navItemChilds = navItem.parent();
    const navChilds = navItemChilds.find(".nav-childs");

    navChilds.toggleClass("d-none");
    $(this).find("svg").toggleClass("rotate");
  });

  // desktop open search bar
  $('.search-toggler__ctn').click(function () {
    const search = $(".search-form");
    
    if ($(window).width() > 992) {
      search.addClass("slideSearch");
    }
  });

  // move nav items
  function moveSocials() {
    const socials = $(".nav-socials");
    const movingDest = $(".nav-logo-ctn");
    const mobileMovingDest = $(".nav-menu__ctn");
    const socialsClone = socials.detach();

    if (!socials.parent().is(".nav__logo") && $(window).width() > 992) {
      
      socialsClone.appendTo(movingDest);
      $('.nav__logo').addClass('desktop-nav');
      
    } else {
      
      socialsClone.appendTo(mobileMovingDest);
      $('.nav__logo').removeClass('desktop-nav');
      
    }
  }

  function moveSearch() {
    const search = $(".nav-menu__ctn .search-form");
    const movingDest = $(".search-toggler__ctn");
    const searchClone = search.detach();

    if (!search.parent().is(".search-toggler__ctn") && $(window).width() > 992) {
      searchClone.prependTo(movingDest);
    } else {
      searchClone.prependTo('.nav-menu__ctn');
    }
  }

  moveSocials();
  moveSearch();
  $(window).resize(function () {
    moveSocials();
    moveSearch();
  });
});
