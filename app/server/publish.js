Meteor.publish('temperatureReadings', function () {
    return this.userId ?
        TemperatureReadings.find({}, { limit: 200 }) : [];
});