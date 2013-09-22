var app = {};

$(document).ready(function () {

    "use strict";

    function renderList(products) {
        var l = products.length,
            product;
        $('.product-list').empty();
        for (var i = 0; i < l; i++) {
            product = products[i];
            $('.product-list').append(
                '<li class="topcoat-list__item"><a href="#products/' + product.id + '">' +
                '<img src="../assets/img/' + product.smallPic + '" />' +
                '<p>' + product.name + '</p><p>' + product.category + '</p><p>' + product.price + '</p><span class="chevron"></span></a></li>');
        }
    }

    function renderHomeView() {
        var html =
            '<div class="topcoat-navigation-bar">' +
                '<div class="topcoat-navigation-bar__item center full">' +
                    '<h1 class="topcoat-navigation-bar__title">Geometrixx</h1>' +
                '</div>' +
            '</div>' +
            '<div class="search-bar">' +
                '<input type="search" placeholder="search" class="topcoat-search-input search-key">' +
            '</div>' +
            '<div class="topcoat-list__container scroller" style="top:138px;">' +
                '<ul class="topcoat-list list product-list"></ul>' +
            '</div>';
        $('body').html(html);
        $('.search-key').on('keyup', findByName);
    }

    function renderProductView(product) {
        var i,
            len = product.features.length,
            cssClass,
            html =
            '<div class="topcoat-navigation-bar">' +
                '<div class="topcoat-navigation-bar__item left quarter">' +
                    '<a class="topcoat-icon-button--quiet back-button" href="#">' +
                        '<span class="topcoat-icon topcoat-icon--back"></span>' +
                    '</a>' +
                '</div>' +
                '<div class="topcoat-navigation-bar__item center half">' +
                    '<h1 class="topcoat-navigation-bar__title">Geometrixx</h1>' +
                '</div>' +
            '</div>' +
            '<div class="page-body scroller">' +
                '<img class="small-pic" src="../assets/img/' + product.smallPic + '" />' +
                '<h1 class="product-name">' + product.name + '</h1>' +
                '<h2 class="category">' + product.category + '</h2>' +
                '<img src="../assets/css/images/star' + product.rating + '.png" />' +
                '<h2 class="price">' + product.price + '</h2>' +
                '<a class="topcoat-icon-button topcoat-button--cta">' +
                '<span class="topcoat-icon icon-facebook"></span>' +
                '</a> ' +
                '<a class="topcoat-icon-button topcoat-button--cta">' +
                '<span class="topcoat-icon icon-twitter"></span>' +
                '</a>' +
                '<h3>Features:</h3>' +
                '<ul class="feature-list topcoat-list">';

        for (i = 0; i < len; i++) {
            html += '<li class="topcoat-list__item">' + product.features[i] + '</li>';
        }

        html = html + '</ul>' +
                '<div class="large-pic-bg"></div>' +
                '<div class="large-pic"></div>' +
                '<div class="large-pic" style="background: url(\'../assets/img/' + product.largePic + '\') center center no-repeat;background-size: contain;"></div>' +
            '</div>';

        $('body').html(html);
    };

    function route() {
        var hash = window.location.hash,
            detailsURL = /^#products\/(\d{1,})/,
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
    };

    function findByName() {
        app.productAdapter.findByName($('.search-key').val()).done(function (products) {
            renderList(products);
        });
    };

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

