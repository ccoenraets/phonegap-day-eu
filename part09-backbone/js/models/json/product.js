define(function (require) {

    "use strict";

    var Backbone = require('backbone'),

        Product = Backbone.Model.extend({

            urlRoot: "http://localhost:3000/products"

        }),

        ProductCollection = Backbone.Collection.extend({

            model: Product,

            url: "http://localhost:3000/products"

        });

    return {
        Product: Product,
        ProductCollection: ProductCollection
    };

});