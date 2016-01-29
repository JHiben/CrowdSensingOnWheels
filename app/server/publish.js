Meteor.publish('temperatureReadings', function () {
    return Meteor.userId() ?
        TemperatureReadings.find({}) : [];
});

Meteor.subscribe('temperatureReadings');