function getPics(url) {
    var flickerAPI = url;
    $.getJSON(flickerAPI)
        .done(function(data) {
            picsContainersHtmlBuilder(data);
        });
}