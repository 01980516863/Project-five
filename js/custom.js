
// menu js part start
$(Window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling> 200){
      $(".menu-bg").addClass("bg-color")
    }else{
      $(".menu-bg").removeClass("bg-color")
    }
  });
  
  $(".scroll-icon i").click(function(){
    $("html,body").animate({
      scrollTop: 0,
    },1000)
  })

  // nav item close js
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
});

$(".nav-open").click(function(){
    $(this).hide();
    $(".nav-close").toggle();
});

$(".nav-close").click(function(){
    $(this).hide();
    $(".nav-open").show();
})
$(".nav-link").click(function(){
    $(".nav-close").hide();
    $(".nav-open").show();
})

  // back to top
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling>100){
      $(".scroll-icon i").fadeIn(500)
    }
    else{
      (scrolling>100)
        $(".scroll-icon i").fadeOut(500)
      }
  })
  // menu search bar
  $(".search-open").click(function(){
    $(this).hide();
    $(".search-bar").show(500);
    $(".search-close").show();
  });

  $(".search-close").click(function(){
    $(this).hide();
    $(".search-bar").hide(500);
    $(".search-open").show()
  });

  // menu js part end

  // about counter js start
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
});
  // about counter js end

  // populer part slick js start
  $('.populer-main').slick({
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: ".populer-next",
    prevArrow: ".populer-prev",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  });
  // populer part slick js end

  // live stream part venoBox js
  new VenoBox({
    selector: '.story-video',
});


// all games  part slick js start
$('.all-games-slick').slick({
  dots: false,
  infinite: false,
  speed: 200,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: ".all-games-next",
  prevArrow: ".all-games-prev",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});
