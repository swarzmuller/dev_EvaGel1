// $(document).ready(function () {
//     $('.btn-c').click(function() {
//         $('.text-container, .slider, .owl-stage-outer').toggleClass("show1").animate("slow");
//         $(this).toggleClass("rotate");
//     });
//     setTimeout(function(){
//         $('.owl-next, .owl-prev').click(function() {
//             $('.text-container, .slider, .owl-stage-outer').removeClass("show1 rotate opa");
//         });
//     },1000);
//     $(".order-button").click(function(){
//         $(".ever-popup").addClass("show");
//     });
// });
//
//
// // new Vue({
// //           el: '#carousel',
// //           loop: true,
// //             showModal: true,
// //           data: {
// //             slides: 5,
// //             loop: false,
// //               clickable: false
// //           },
// //           components: {
// //             'carousel-3d': Carousel3d.Carousel3d,
// //             'slide': Carousel3d.Slide
// //           }
// //         });
//
//
//
// $('.btn-c').click(function() {
//     $(this).parent().children('.text-container').toggleClass("opa");
//     $(this).toggleClass("rotate");
// });
//
// $('button[href*="#"]').click( function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 1500);
// });
//
// $(document).ready(function() {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         center: true,
//         startPosition: 3,
//         dots: false,
//         touchDrag: true,
//         mouseDrag: false,
//         responsiveClass: true,
//         URLhashListener:true,
//         animateIn: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: true
//             },
//             767: {
//                 items: 3,
//                 nav: true
//             },
//             1170: {
//                 items: 5,
//                 nav: true
//             }
//         }
//     })
// })
//
// var owl = $('.owl-carousel');
// owl.owlCarousel();
//
// $('.new-owl-control__btn.next').click(function() {
//     owl.trigger('next.owl.carousel');
//     changeSliderItmes()
// })
// $('.new-owl-control__btn.prev').click(function() {
//     owl.trigger('prev.owl.carousel');
//     changeSliderItmes()
// })
// function changeSliderItmes() {
//     $('.responsive__carousel .item .text-container').removeClass('opa');
//     $('.owl-stage-outer').removeClass('show1')
//     $('.owl-item').removeClass('lvl-2');
//     $('.owl-item').removeClass('lvl-3');
//     $('.owl-item.active.center').next().addClass('lvl-2').next().addClass('lvl-3');
//     $('.owl-item.active.center').prev().addClass('lvl-2').prev().addClass('lvl-3');
// }
// changeSliderItmes()
// });