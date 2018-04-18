$(document).ready(function () {
    $('.show-btn').click(function() {
        $('.text-container, .slider').toggleClass("show1").animate("slow");
        $(this).toggleClass("rotate");
    });
    $('.next[data-v-43e93932], .prev[data-v-43e93932]').click(function() {
        $('.text-container, .slider, .show-btn').removeClass("show1 rotate");
    });
    $(".order-button").click(function(){
        $(".ever-popup").addClass("show");
    });
});
new Vue({
          el: '#carousel',
          loop: true,

          data: {
            slides: 5,
            loop: false,
              clickable: false
          },
          components: {
            'carousel-3d': Carousel3d.Carousel3d,
            'slide': Carousel3d.Slide
          }
        });
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        touchDrag: true,
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            767: {
                items: 3,
                nav: true
            }
        }
    })
})

$('.btn-c').click(function() {
    $(this).parent().children('.text-container').toggleClass("opa");
    $(this).toggleClass("rotate");
});