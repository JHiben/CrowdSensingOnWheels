Meteor.publish('temperatureReadings', function () {
    return this.userId ?
        TemperatureReadings.find({}, { sort: { readAt: -1 }, limit: 200 }) : [];
});