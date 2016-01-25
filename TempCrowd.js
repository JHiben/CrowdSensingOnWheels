TemperatureReadings = new Mongo.Collection('temperatureReadings');

if (Meteor.isServer) {

    // Global API configuration
    var Api = new Restivus({
        useDefaultAuth: true,
        prettyJson: true
    });

    // Generates: GET, POST on /api/items and GET, PUT, DELETE on
    // /api/items/:id for the Items collection
    Api.addCollection(TemperatureReadings, {
        routeOptions: {
            authRequired: true
        }
    });

    // Maps to: /api/articles/:id
    // Api.addRoute('temperatureReadings/:id', { authRequired: true }, {
    //     get: function () {
    //         return TemperatureReadings.findOne(this.urlParams.id);
    //     }
    //     // delete: {
    //     //     roleRequired: ['author', 'admin'],
    //     //     action: function () {
    //     //         if (Articles.remove(this.urlParams.id)) {
    //     //             return { status: 'success', data: { message: 'Article removed' } };
    //     //         }
    //     //         return {
    //     //             statusCode: 404,
    //     //             body: { status: 'fail', message: 'Article not found' }
    //     //         };
    //     //     }
    //     // }
    // });
    
}

if (Meteor.isClient) {
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });
}