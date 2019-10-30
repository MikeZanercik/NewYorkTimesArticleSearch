var APIKey = "aO1xoU3JZcF2hwh8eKAfVKwwn2Err6aw";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;

var apiKey = "&api-key=17gQQhZPuy5FP49ABMFG71G76XgGmq2u";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var searchWord = "election";

queryURL += searchWord;
queryURL += apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    console.log(queryURL); 
    console.log(response);
  });
