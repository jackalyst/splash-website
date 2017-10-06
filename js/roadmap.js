 $(document)
        .ready(function() {
            // var timelineBlocks = $('.cd-timeline-block'),
            //     offset = 0.8;

            // hideBlocks(timelineBlocks, offset);

            // $(window).on('scroll', function() {
            //     (!window.requestAnimationFrame) ? setTimeout(function() {
            //         showBlocks(timelineBlocks, offset);
            //     }, 100): window.requestAnimationFrame(function() {
            //         showBlocks(timelineBlocks, offset);
            //     });
            // });

            // function hideBlocks(blocks, offset) {
            //     blocks.each(function() {
            //         ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.8) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').hide();
            //     });
            // }

            // function showBlocks(blocks, offset) {
            //     blocks.each(function() {
            //         ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.8 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in').show('bounce');
            //     });
            // }

            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item');
        });