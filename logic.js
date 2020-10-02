$(document).ready(function () {
  console.log("hi")
  var APIKey = "t7bAAaUxOAhdGnsJkTLVIFigHFNthOGu"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey;



  $("#searchBtn").on("click", function () {
    console.log("hi2")
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      var headLine = response.headline;
      var byLine = response.byline;
      var section = response.print_section;
      var date = response.pub_date;
      var webURL = response.web_url;

      var elements = $(`
              <div>
                <h4>${headLine}</h4>
                <p>${byLine}</p>
                <p>${section}</p>
                <p>${date}</p>
                <link href="${webURL}>
              </div>
              `)

    });


  })







})
