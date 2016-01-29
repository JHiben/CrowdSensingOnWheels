Meteor.publish('temperatureReadings', function () {
    return this.userId ?
        TemperatureReadings.find({}) : [];
});