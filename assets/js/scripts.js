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
  $(".search-toggler__ctn").click(function () {
    const search = $(".nav .search-form");

    if ($(window).width() > 992) {
      search.addClass("slideSearch");
    }
  });

  // bottom nav popup animation
  function bottomNavAnimation() {
    const ctn = $(".bottom-nav__msg");
    const popup = ctn.find(".popup__ctn");

    if (ctn.hasClass("moveup-anim")) {
      ctn.removeClass("moveup-anim");
      ctn.addClass("movedown-anim");
      popup.addClass("fadeout-anim");
      popup.removeClass("fadein-anim");
    } else {
      ctn.removeClass("movedown-anim");
      ctn.addClass("moveup-anim");
      popup.removeClass("fadeout-anim");
      popup.addClass("fadein-anim");
    }
  }

  $(".ana-ctn").click(bottomNavAnimation);
  $(".popup__ctn svg").click(bottomNavAnimation);

  // move nav items
  function moveSocials() {
    const socials = $(".nav-socials");
    const movingDest = $(".nav-logo-ctn");
    const mobileMovingDest = $(".nav-menu__ctn");
    const socialsClone = socials.detach();

    if (!socials.parent().is(".nav__logo") && $(window).width() > 992) {
      socialsClone.appendTo(movingDest);
      $(".nav__logo").addClass("desktop-nav");
    } else {
      socialsClone.appendTo(mobileMovingDest);
      $(".nav__logo").removeClass("desktop-nav");
    }
  }

  function moveSearch() {
    const search = $(".nav .search-form");
    const movingDest = $(".search-toggler__ctn");
    let searchClone = search.detach();

    if (
      !search.parent().is(".search-toggler__ctn") &&
      $(window).width() > 992
    ) {
      searchClone.prependTo(movingDest);
      searchClone.css("width", "300px");
    } else {
      searchClone.prependTo(".nav-menu__ctn");
      searchClone.css("width", "100%");
      searchClone.removeClass("slideSearch");
    }
  }

  moveSocials();
  moveSearch();
  $(window).resize(function () {
    moveSocials();
    moveSearch();
  });

  function customDropdown() {
    $(".custom-dropdown").click(function (event) {
        event.stopPropagation();
        $(this).find(".options-list").slideToggle();
        $(this)
            .find(".selected-option")
            .toggleClass("selected-option-active");
        $(this).find(".option-header").toggleClass("header-option-active");
        $(this).find("svg").toggleClass("rotate");
    });

    $(".options-list").on("click", function (event) {
        event.stopPropagation();
    });

    $("body").on("click", function () {
        $(".options-list").slideUp();
        $(".selected-option").removeClass("selected-option-active");
        $(".option-header").removeClass("header-option-active");
        $(".custom-dropdown").find("svg").removeClass("rotate");
    });
}
customDropdown();

  // filters toggle button
  $('.filters-toggle').click(function () {
    $('.filters').slideToggle();
  });

  // fade in animation when component is in viewport
  $(window).scroll(function () {
    const component = $(".casino-info__msg");
    const componentTop = component.offset().top;
    const componentBottom = componentTop + component.outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    if (componentBottom > viewportTop && componentTop < viewportBottom) {
      component.addClass("fade-in");
    }
  });
});

