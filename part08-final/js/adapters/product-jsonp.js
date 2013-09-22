define(function (require) {

    "use strict";

    var $ = require('jquery'),

        url = "http://localhost:3000/products",

        findById = function (id) {
            return $.ajax({url: url + "/" + id, dataType: "jsonp"});
        },

        findByName = function (searchKey) {
            return $.ajax({url: url + "?name=" + searchKey, dataType: "jsonp"});
        };

    // The public API
    return {
        findById: findById,
        findByName: findByName
    };

});