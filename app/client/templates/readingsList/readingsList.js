var nbItemsToShow = 15;

Session.set('currentPage', 1);

function getPages() {
    var mod = TemperatureReadings.find({}).count() / nbItemsToShow,
        pages = [];

    for (var i = 1; i <= mod; i++) {
        pages.push(i);
    }

    return pages;
}

Template.readingsList.helpers({
    readings: function () {
        var nbItemsToSkip = (Session.get('currentPage') - 1) * nbItemsToShow;
        return TemperatureReadings.find({}, { sort: { readAt: -1 }, limit: nbItemsToShow, skip: nbItemsToSkip });
    },
    pages: getPages,
    currentPage: () => Session.get('currentPage'),
    lastPage: () => {
        var pages = getPages();
        return pages.length ? pages[pages.length - 1] : 1;
    }
});

Template.readingsList.events({
    'click .pagination-number-js': function (e) {
        Session.set('currentPage', this.valueOf());
    },
    'click .pagination-previous-js:not(.disabled)': (e) => {
        var currentPage = Session.get('currentPage');
        Session.set('currentPage', currentPage - 1);
    },
    'click .pagination-next-js:not(.disabled)': (e) => {        
        var currentPage = Session.get('currentPage');
        Session.set('currentPage', currentPage + 1);
    }
});