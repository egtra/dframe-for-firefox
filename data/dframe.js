/// <reference path="jquery-2.1.1.min.js"/>

jQuery(function ($) {
    var definition = JSON.parse(document.body.textContent);
    if (definition.type !== "site" && definition.type !== undefined) {
        document.body.innerHTML = "<h1>Unsuppoted type</h1>";
        return;
    }

    document.title = definition.title;

    var mainPage = definition.main === undefined ? "index.md" : definition.main;
    var jqxhr = $.get(mainPage).done(function (data) {
        $(document.body).html(markdown.toHTML(data));
    }).fail(function () {
        alert("download failded!");
    })
});
