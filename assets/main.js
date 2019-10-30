var APIKey = "aO1xoU3JZcF2hwh8eKAfVKwwn2Err6aw";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    console.log(queryURL); 
    console.log(response);
  });
