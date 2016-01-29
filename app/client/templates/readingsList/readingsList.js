Session.set('currentPage', 1);

Template.readingsList.helpers({
    readings: () => TemperatureReadings.find({}, { sort: { readAt: -1 } }),
    pages: () => {
        return [1,2,3,4];
    },
    currentPage: () => Session.get('currentPage')
});