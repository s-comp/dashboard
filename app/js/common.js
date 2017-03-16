$(function() {
  $('.my-slider').owlCarousel({
    items: 4,
    margin: 30,
  });

  $('.burger_menu').click(function() {
    var menu = $('.navbar ul'),
        wrap = $('.wrap1');
    if($(this).is('.active')) {
      $(this).removeClass('active');
      menu.removeClass('show');
      wrap.removeClass('site-left');
    } else {
      $(this).addClass('active');
      menu.addClass('show');
      wrap.addClass('site-left');
    }
  });
  var burger = $('.burger_menu'),
  burgerPosition = burger.offset().top + 30,
  scrollTop = 0,
  windowWidth = 0;

  $(window).resize(function() {
    windowWidth = $(this).width();
    risizeMenu();
  });

  $(window).scroll(function() {
    scrollTop = $(this).scrollTop();
    fixedMenu();
  });

  function fixedMenu() {
    if (scrollTop >= burgerPosition ) {
      burger.addClass('fixed');
    }
    else {
      burger.removeClass('fixed');
    };
  }
  function risizeMenu() {
    var menu = $('.navbar ul'),
        wrap = $('.wrap1');
    if(windowWidth >= 768) {
      menu.removeClass('show');
      wrap.removeClass('site-left');
      bur.removeClass('active');
    }
  }


    console.log(scrollTop);


});
