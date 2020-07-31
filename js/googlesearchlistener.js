// JavaScript Document
// JavaScript code that should follow the search box code
  
  // add a listener for form submission, i.e. when user hits Enter or
  // clicks to any submit button form
  document.querySelector('.search-form').addEventListener('submit', function(e) {
    // do not actually submit the form, we'll do something else
    e.preventDefault();
    // read the search query for input tag, i.e. user searches
    // for "burton" 
    var q = document.querySelector('input[name="q"]').value;
    // just proceed if user has typed something
    if (q.length > 0) {
      // go to search results page which is search.html here
      // but can be anything you like with "gsc.q" hash parameter
      // equal to search query
      window.open('https://nick-vecchio.github.io/HelpMeGeaugaBootStrap/search.html#gsc.q=' + q, '_self');
    }
  });

  // (optional part)
  // below is only used if you also want to put the search box
  // on the search results page it's useful when the user wants
  // to search something else directly and let user know
  // what they are searching for at that moment
  
  // check if any hash parameter exists on the URL
  if (window.location.hash.length > 0) {
    // read the search query value among hash parameters
    // with key "gsc.q="
    var q = window.location.hash.substring(1).split('&').filter(function(v) {
      return v.substring(0, 6) === 'gsc.q=';
    })[0].substring(6);
    // if there is actually a search query
    if (q.length > 0) {
      // put it as the input tag's value
      document.querySelector('input[name="q"]').value = q;
    }
  }