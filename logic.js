$(document).ready(function(){

    var APIKey = "t7bAAaUxOAhdGnsJkTLVIFigHFNthOGu"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=t7bAAaUxOAhdGnsJkTLVIFigHFNthOGu" 
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        
      });









})
