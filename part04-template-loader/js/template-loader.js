app.templates = (function () {

    "use strict";

    var templates = {},

        load = function () {

            var deferreds = [];

            $.each(arguments, function (index, tpl) {
                deferreds.push($.get("tpl/" + tpl + ".html", function (text) {
                    templates[tpl] = Handlebars.compile(text);
                }, 'html'));
            });

            return $.when.apply(null, deferreds);
        },

        get = function (name) {
            return templates[name];
        };

    // The public API
    return {
        load: load,
        get: get
    };

}());