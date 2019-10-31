
$(".btn-primary").on("click", function () {
  event.preventDefault();
  searchWord = $(":input.form-control").val()
  searchNumber = $(":input#numberSelector").val()
  searchStartYear = "&begin_date="+$("#startYear").val()+'0101'
  searchEndYear = "&end_date="+ $("#endYear").val()+'1231'
  
console.log(searchStartYear);
console.log(searchEndYear); 

var APIKey = "aO1xoU3JZcF2hwh8eKAfVKwwn2Err6aw";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + APIKey;

queryURL += searchStartYear + searchEndYear;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
})




  
  .then(function(response) {
    console.log(queryURL); 
    console.log(response);
  });
})
