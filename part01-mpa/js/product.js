var id = parseInt(getParameterByName("id"));

productAdapter.findById(id).done(function (product) {
    var i,
        len = product.features.length;
    $(".small-pic").attr("src", "../assets/img/" + product.smallPic);
    $(".product-name").html(product.name);
    $(".category").html(product.category);
    $(".rating").attr("src", "../assets/css/images/star" + product.rating + ".png");
    $(".price").html(product.price);
    $(".large-pic").attr("style", "background: url('../assets/img/" + product.largePic + "') center center no-repeat;");
    for (i = 0; i < len; i++) {
        $(".feature-list").append('<li class="topcoat-list__item">' + product.features[i] + '</li>');
    }
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(".small-pic").on('click', function () {
    $(".large-pic-bg").show();
    $(".large-pic").show();
});
$(".large-pic").on('click', function () {
    $(".large-pic").hide();
    $(".large-pic-bg").hide();
});
