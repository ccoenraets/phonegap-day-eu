var app = {
    views: {}
};

$(document).ready(function () {

    "use strict";

    var detailsURL = /^#products\/(\d{1,})/;

    function route() {
        var hash = window.location.hash,
            match,
            view;
        if (!hash) {
            view = new app.views.HomeView();
            $("body").html(view.render().$el);
        }
        match = hash.match(detailsURL);
        if (match) {
            app.productAdapter.findById(Number(match[1])).done(function (product) {
                view = new app.views.ProductView(product);
                $("body").html(view.render().$el);
            });
        }
    }

    app.templates.load("Home", "Product", "ProductListItem").done(function () {
        route();
        $(window).on('hashchange', route);
    });

});