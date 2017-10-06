Meteor.startup(function () {
  Meteor.disconnect();
});
FlowRouter.route('/', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'main' });
    }
});
FlowRouter.route('/team', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'team' });
    }
});
FlowRouter.route('/roadmap', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'roadmap' });
    }
});
FlowRouter.route('/testM/', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'main' });
    }
});
FlowRouter.route('/testM/team', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'team' });
    }
});
FlowRouter.route('/testM/roadmap', {
    name: 'show.page',
    action() {
        BlazeLayout.render('layout', { main: 'roadmap' });
    }
});
Template.main.rendered = function() {
    this.$("#section-1").height($(window).height());
    this.$('.ui.sidebar').sidebar({
        dimPage: false,
        transition: 'push',
        exclusive: false,
        closable: true
    }).sidebar('attach events', 'a.toc.item');
    this.$('.ui.dropdown').dropdown();
};
Template.team.rendered = function() {
    this.$('.ui.sidebar').sidebar({
        dimPage: false,
        transition: 'push',
        exclusive: false,
        closable: true
    }).sidebar('attach events', 'a.toc.item');
    this.$('.ui.dropdown').dropdown();
    this.$('#SMT').addClass('active');
    this.$('#FMT').addClass('active');
};
Template.roadmap.rendered = function() {
    this.$('.dimmer').dimmer('hide');
    this.$('.ui.sidebar').sidebar({
        dimPage: false,
        transition: 'push',
        exclusive: false,
        closable: true
    }).sidebar('attach events', 'a.toc.item');
    this.$('.ui.dropdown').dropdown();
    this.$('#SMR').addClass('active');
    this.$('#FMR').addClass('active');
};
Template.main.onCreated(function() {
    $(window).resize(function() {
        this.$("#section-1").height($(window).height());
    });
});

Template.main.onDestroyed(function() {
    $('.dimmed').dimmer('hide');
    $(window).off('resize');
});