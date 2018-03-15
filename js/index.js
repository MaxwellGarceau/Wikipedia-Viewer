$(document).ready(function() {
    $("#submit").click(function() {
        $('#wiki-output').css('display', 'none');
        var searchInput = $("#search-input").val();
        var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&namespace=0&suggest=1&format=json&callback=?";
        var title = [];
        var description = [];
        var noResults = "No results. Please make sure you have the correct title.";

        $.ajax({
            type: 'GET',
            url: wikiURL,
            async: false,
            dataType: 'jsonp',
            success: function(searchResults) {

                for (i = 0; i < searchResults[1].length; i++) {
                    title.push("<li>" + "<span style=\"font-family: 'Poiret One', cursive; font-size: 3vmin;\">" + "<span style=\"font-size: 4vmin; font-weight: bold;\">" + searchResults[1][i] + "</span>" + "<br>" + searchResults[2][i] + "<br>" + "<a href='" + searchResults[3][i] + "' target='blank'>" + searchResults[3][i] + "</a>" + "</span>" + "</li>" + "<br>");
                    var titleStr = title.join('');
                    document.getElementById("wiki-output").innerHTML = titleStr;
                    $("#wiki-output").fadeIn(1500);
                }
            },
            error: function(error) {
                alert("Error");
            }
        });
    });
});