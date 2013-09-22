app.views.ProductView = function (product) {

    "use strict";

    var template = app.templates.get("Product");

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
