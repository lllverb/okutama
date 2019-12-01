$(function () {
  var header = $('#header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      header.addClass('index-header');
    } else {
      header.removeClass('index-header');
    }
  });
});