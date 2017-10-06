   $(document)
        .ready(function() {

            $('.dimmer').dimmer({
                on: 'hover'
            });

            // create sidebar and attach to menu open
            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item');

        });