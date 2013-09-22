app.views.HomeView = function () {

    "use strict";

    var template = app.templates.get("Home"),
        listItemTemplate = app.templates.get("ProductListItem");

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function () {
        this.$el.html(template());
        return this;
    };

    this.findByName = function () {
        app.productAdapter.findByName($('.search-key').val()).done(function (products) {
            $('.product-list').html(listItemTemplate(products));
        });
    };

    this.initialize();

}