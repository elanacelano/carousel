// $('.carousel').carousel({
//   interval: 2000
// })

// $('#myCarousel').on('slide.bs.carousel', function () {
//   // do something...
// })

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});