//-----search
var searchResults = document.getElementById('searchresults')

function showSearchResults() {
  searchResults.setAttribute('class', 'show');
}

var searchButton = document.getElementById('searchbutton')

searchButton.addEventListener('click', showSearchResults, false);

