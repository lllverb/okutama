$(function () {
  // 検討中/////////////////
  var header = $('#header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      header.addClass('bg-white');
    } else {
      header.removeClass('bg-white');
    }
  });
  // 検討中////////////////
});