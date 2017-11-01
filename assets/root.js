$(document)
        .ready(function() {

            // fix menu when passed


            // create sidebar and attach to menu open
            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item');

            function viewport_height() {
                var window_height = $(window).height();
                $("#section-1").height(window_height);
            }

            viewport_height();
            $('.ui.dropdown').dropdown();
        });
    // $(window).resize(function(){
    //           $("#DateCountdown").TimeCircles().rebuild();
    //       });

    function viewport_height() {
        var window_height = $(window).height();
        $("#section-1").height(window_height);
    }

    viewport_height();

    $(window).resize(function() {
        viewport_height();
    });