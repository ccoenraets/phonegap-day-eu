define(function (require) {

    "use strict";

    var $               = require('jquery'),
        productAdapter  = require('adapters/product'),
        HomeView        = require("app/HomeView"),
        ProductView     = require("app/ProductView"),
        PageSlider      = require("app/utils/PageSlider"),

        detailsURL = /^#products\/(\d{1,})/,
        slider = new PageSlider($("body")),
        homeView = new HomeView().render(),

        route = function () {

            var hash = window.location.hash,
                view,
                match;

            if (!hash) {
                slider.slidePage(homeView.$el);
                return;
            }

            match = hash.match(detailsURL);
            if (match) {
                productAdapter.findById(Number(match[1])).done(function (product) {
                    view = new ProductView(product);
                    view.render();
                    slider.slidePage(view.$el);
                });
            }
        },

        start = function () {
            $(window).on('hashchange', route);
            route();
        };

    // The public API
    return {
        start: start
    };

});