$(document).ready(() => {
  $("#slider .slick").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: "linear",
    arrows: true,
  });
});

new WOW().init();

// Porfolio isotope and filter
$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
});
