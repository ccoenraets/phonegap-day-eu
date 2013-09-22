var app = {};

$(document).ready(function () {

    "use strict";

    var homeTpl,
        productListItemTpl,
        productTpl,
        detailsURL = /^#products\/(\d{1,})/;

    function findByName() {
        app.productAdapter.findByName($('.search-key').val()).done(function (products) {
            $('.product-list').html(productListItemTpl(products));
        });
    }

    function renderHomeView() {
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
    }

    function renderProductView(product) {
        $('body').html(productTpl(product));
    }

    function route() {
        var hash = window.location.hash,
            match;
        if (!hash) {
            renderHomeView();
            return;
        }
        match = hash.match(detailsURL);
        if (match) {
            app.productAdapter.findById(Number(match[1])).done(function (product) {
                renderProductView(product);
            });
        }
    }

    $(window).on('hashchange', route);

    $("body").on('click', ".small-pic", function () {
        $(".large-pic-bg").show();
        $(".large-pic").show();
    });

    $("body").on('click', ".large-pic", function () {
        $(".large-pic").hide();
        $(".large-pic-bg").hide();
    });

    app.templates.load("Home", "Product", "ProductListItem").done(function () {
        homeTpl = app.templates.get("Home");
        productListItemTpl = app.templates.get("ProductListItem");
        productTpl = app.templates.get("Product");
        route();
    });

});