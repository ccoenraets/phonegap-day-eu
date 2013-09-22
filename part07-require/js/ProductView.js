define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Handlebars  = require('handlebars'),
        productHtml = require('text!tpl/Product.html'),

        template = Handlebars.compile(productHtml);

    return function (product) {

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.$el = $('<div/>');
            this.$el.on('click', '.small-pic', function () {
                $(".large-pic-bg", this.$el).show();
                $(".large-pic", this.$el).show();
            });
            this.$el.on('click', '.large-pic', function () {
                $(".large-pic", this.$el).hide();
                $(".large-pic-bg", this.$el).hide();
            });
        };

        this.render = function () {
            this.$el.html(template(product));
            return this;
        };

        this.initialize();

    };

});
