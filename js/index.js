///   <reference types="../@types/jquery" />;

let offset = $("#about").offset().top;
console.log(offset);

$(window).on("scroll", function () {
  let userScroll = $(window).scrollTop();
  if (userScroll > offset - 70) {
    $(".navbar").css({ background: "tomato" });
  } else {
    $(".navbar").css({ background: "rgb(0, 0, 0, 0.65)" });
  }
});
$(".nav-link").on("click", function (e) {
  // console.log(e.target);
  let href = $(e.target).attr("href");
  console.log(href);
  let userOffset = $(href).offset().top;
  $("body").animate({ scrollTop: userOffset - 90 }, 3000);
});
$(function () {
  $(".spinner").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css({ overflow: "auto" });
      $(".loading").remove()
    });
  });
});
