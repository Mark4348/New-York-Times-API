$(document).ready(function(){
    console.log("hi")
    var APIKey = "t7bAAaUxOAhdGnsJkTLVIFigHFNthOGu"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;
    
    

    $("#searchBtn").on("click", function(){
        console.log("hi2")
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            
        });
    

    })    







})
