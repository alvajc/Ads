//-------sign up 
var signUp = document.getElementById('signup');

function showSignUp() {
  signUp.setAttribute('class', 'show');
}

var signForm = document.getElementById('signform');

signForm.addEventListener('click', showSignUp, false);

//-----search
var searchResults = document.getElementById('searchresults')

function showSearchResults() {
  searchResults.setAttribute('class', 'show');
}

var searchButton = document.getElementById('searchbutton')

searchButton.addEventListener('click', showSearchResults, false);

