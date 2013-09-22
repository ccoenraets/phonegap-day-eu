define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Handlebars          = require('handlebars'),
        productAdapter      = require('adapters/product'),
        homeHtml            = require('text!tpl/Home.html'),
        productListItemHtml = require('text!tpl/ProductListItem.html'),

        homeTpl = Handlebars.compile(homeHtml),
        productListItemTpl = Handlebars.compile(productListItemHtml);


    return function () {

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
            this.$el.on('keyup', '.search-key', this.findByName);
        };

        this.render = function () {
            this.$el.html(homeTpl());
            return this;
        };

        this.findByName = function () {
            productAdapter.findByName($('.search-key').val()).done(function (products) {
                $('.product-list').html(productListItemTpl(products));
            });
        };

        this.initialize();

    };

});

