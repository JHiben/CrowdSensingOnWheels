var nbItemsToShow = 15;

Session.set('currentPage', 1);

Template.readingsList.helpers({
    readings: () => TemperatureReadings.find({}, { sort: { readAt: -1 }, limit: nbItemsToShow }),
    pages: () => {
        var mod = TemperatureReadings.find({}).count() / nbItemsToShow,
            pages = [];
        
        for (var i = 1; i <= mod; i++) {
            pages.push(i);
        }
        
        return pages;
    },
    currentPage: () => Session.get('currentPage')
});