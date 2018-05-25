$(document).ready(function () {
    $('.show-btn').click(function() {
        $(this).parent().children('.text-container').toggleClass("show");
        $(this).toggleClass("rotate");
    });
});