function search(searchBox, resultsBoxId) {

    var searchTerms = searchBox.value.split(" ");
    var searchResults = document.getElementById(resultsBoxId);
    var resultsBox = searchResults.getElementsByClassName("results")[0];
    var resultsBoxStyles = resultsBox.className.split(" ");
    var results = "";

    if (searchTerms.length > 0 && searchTerms[0] != "") {
        searchResults.classList.add("show-results");
    } else {
        searchResults.classList.remove("show-results");
    }

    // for(var i =0; i < searchTerms.length; i++){
    //     results += "<li>Result: " + i + "</li>";
    // }

    // resultsBox.innerHTML = (results == "") ? "No results." : "<ul>" + results + "</ul>";

    return;
    
}