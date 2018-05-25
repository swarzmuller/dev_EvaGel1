$(document).ready(function () {
    var c = document.querySelector('.table').getBoundingClientRect(),
        tableTop = c.top + pageYOffset;
    /*console.log(tableTop);*/

    var troll = 0;

    function one() {
        var c = document.querySelector('.table').getBoundingClientRect();
        tableTop = c.top + pageYOffset;
    }

    one();
    $(window).on('resize', one);

    var scroller = document.documentElement.scrollTop;

    /*console.log(scroller);*/
    if (scroller > (tableTop - 700) & scroller < (tableTop + 100) & troll === 0) {
        troll++;
        setTimeout(function () {
            var i = 0;
            var z = 0;
            var progress = setInterval(function () {
                i++;
                z = i + "%";
                var dex = $(".pro11");
                if (i <= 100) {
                    dex[0].innerHTML = i + "%";
                    $(".pro1").css('background-size', z);
                }
                if (i <= 90) {
                    dex[1].innerHTML = i + "%";
                    $(".pro2").css('background-size', z);
                }
                else {
                    dex[1].innerHTML = '90,8%';
                }
                if (i <= 94) {
                    dex[2].innerHTML = i + "%";
                    $(".pro3").css('background-size', z);
                }
                else {
                    dex[2].innerHTML = '94,6%';
                }
                if (i <= 97) {
                    dex[3].innerHTML = i + "%";
                    $(".pro4").css('background-size', z);
                }

            }, 30);
            setTimeout(function () {
                clearInterval(progress);
            }, 5000);
        }, 600);
    }
    window.onscroll = function () {
        var scrolled = document.documentElement.scrollTop;
        if (scrolled > (tableTop - 700) & scrolled < (tableTop + 100) & troll === 0) {
            troll++;
            setTimeout(function () {
                var i = 0;
                var z = 0;
                var progress = setInterval(function () {
                    i++;
                    z = i + "%";
                    var dex = $(".pro11");
                    if (i <= 100) {
                        dex[0].innerHTML = i + "%";
                        $(".pro1").css('background-size', z);
                    }
                    if (i <= 90) {
                        dex[1].innerHTML = i + "%";
                        $(".pro2").css('background-size', z);
                    }
                    else {
                        dex[1].innerHTML = '90,8%';
                    }
                    if (i <= 94) {
                        dex[2].innerHTML = i + "%";
                        $(".pro3").css('background-size', z);
                    }
                    else {
                        dex[2].innerHTML = '94,6%';
                    }
                    if (i <= 97) {
                        dex[3].innerHTML = i + "%";
                        $(".pro4").css('background-size', z);
                    }
                }, 30);
                setTimeout(function () {
                    clearInterval(progress);
                }, 5000);

            }, 600);
        }
    };
});