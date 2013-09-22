var app = {};

$(document).ready(function () {

    "use strict";

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var productLiTpl = Handlebars.compile($("#product-li-tpl").html());
    var productTpl = Handlebars.compile($("#product-tpl").html());
    var detailsURL = /^#products\/(\d{1,})/;

    function renderList(products) {
        $('.product-list').html(productLiTpl(products));
    }

    function renderHomeView() {
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
    }

    function renderProductView(product) {
        $('body').html(productTpl(product));
    }

    function route() {
        var hash = window.location.hash;
        if (!hash) {
            renderHomeView();
            return;
        }
        var match = hash.match(detailsURL);
        if (match) {
            app.productAdapter.findById(Number(match[1])).done(function (product) {
                renderProductView(product);
            });
        }
    }

    function findByName() {
        app.productAdapter.findByName($('.search-key').val()).done(function (products) {
            renderList(products);
        });
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

    route();

});