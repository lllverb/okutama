$(function () {
  var n = 1
  var nextImage = function () {
    if (n % 2 == 1) {
      $('.top-image').empty();
      $('.top-image').append(`<img src="/assets/facade-88465a28eaa0c87a5714d8323a46d8ad0149ce986cac61c853ac89f5b81a0681.png" />`)
    } else{
      $('.top-image').empty();
      $('.top-image').append(`<img src="/assets/top-85b6732e928b8cac36a43cc90eb0ed13319e7b997c06dbc40ad4023c01766062.png" />`)
    } 
    // else {
    //   $('.top-image').empty();
    //   $('.top-image').append(`<img src="/assets/azuki-f8931c7b9dced5251d1e7362ca815ebb4ab0cade6bd9979f1a385d4533beaff4.jpg" />`)
    // }
    n += 1
  }
  setInterval(nextImage, 5000);
})