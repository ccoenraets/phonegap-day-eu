define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Handlebars  = require('handlebars'),
        Backbone    = require('backbone'),
        tplText     = require('text!tpl/Product.html'),
        template = Handlebars.compile(tplText);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template(this.model.toJSON()));
            return this;
        },

        events: {
            "click .small-pic": "showLargePic",
            "click .large-pic": "hideLargePic"
        },

        showLargePic: function() {
            $(".large-pic-bg", this.$el).show();
            $(".large-pic", this.$el).show();
        },

        hideLargePic: function() {
            $(".large-pic-bg", this.$el).hide();
            $(".large-pic", this.$el).hide();
        }

    });

});