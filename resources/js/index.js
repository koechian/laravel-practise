// Sign in and Login click events

$(".register").hide();

$("#register-button").click(function () {
  $(".login").hide();
  $(".register").show();
});
$("#sign-in-button").click(function () {
  $(".register").hide();
  $(".login").show();
});
// $("#done").click(function () {
//   $(".register").hide();
//   $(".login").show();
// });

// Landing click events
$("#landing").click(function () {
  window.location.href = "/src/landing.html";
});

$("#change").click(function () {
  window.location.href = "/src/landing.html";
});

// Cart click and hover events
$(".cart-dropdown").hide();
$("#cart").hover(function () {
  $(".cart-dropdown").show();
});

$("#close-cart").click(function () {
  $(".cart-dropdown").hide();
});
