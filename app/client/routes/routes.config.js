Router.configure({
    layoutTemplate: 'applicationLayout'
});

Router.onBeforeAction(function () {
    console.log('before action');
    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.render('login');
    }
    else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/readings', function () {
    this.render('readingsDump');
});

Router.route('/charts', function () {
    this.render('readingsCharts');
});

Router.route('/maps', function () {
    this.render('readingsMaps');
});
