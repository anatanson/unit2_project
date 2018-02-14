/*
  Please add all Javascript code to this file.
*/


 var template = $("#data-template").html();
 var templateCompile = Handlebars.compile(template);

 //displays loader when loading window, but messes up the pop up
// $(window).on('load', function () {
// $("#popUp").addClass('loader');
// });

$(document).ready(function(){

// $("#popUp").hide('loader');

//hides the loader, but removed because it messes up the pop up
 //
 // $("#title-id").click(function(){
 //   $("#popUp").removeClass('loader hidden');
 // });

$.ajax({
   cache: false,
  url:
    "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=APIKEY",
  method: "GET",

  error: function() {
    alert("uh oh something's wrong!");
  },
  success: function(data) {
    processData(data);

  }

});



function processData(data) {
  $(function(){

   var template = Handlebars.compile($("#data-template").html());
 console.log(data);
  for (var i = 0; i < data.articles.length; i++) {
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;
    var urlToImage = data.articles[i].urlToImage;


    var html = template(data.articles[i].title);
    $('#title-id').html(html);
  //  $('#title-id').html(); // new
    $('#pop-up-title').html(html);
    var context = {title: data.articles[i].title};




    $("#title-id").append( template({context}) );
    $("#pop-up-title").append( template({context}) );
    $("#image-thumbnail").attr("src", urlToImage);


//adds description to pop up
      var html2 = template(context2);
      $('#pop-up-description').html(html2);
      var context2 = {description: description};
      $("#pop-up-description").append(description);

//opens pop up when title of article is clicked
      $("#title-id").click(function(){
      $("#popUp").removeClass('loader hidden');
    });

//closes the pop up class
    $("#xOut").click(function(){
      $("#popUp").addClass('loader hidden');
    });

//link to the article
    $('#link-to').click(function(){
      location.href = artUrl
    });

//toggle search bar (no other functionality)
    $("#search").click(function () {
         $(this).toggleClass("active");
         e.preventDefault(); /*ignores actual link*/
     });

//checking that it works
     console.log(data);

     } // closing for loop
      });
    };

//***********OTHER PUBS ***************//
    $("#BBC").click(function(e){
             e.preventDefault();
             $.ajax({
                cache: false,
               url:
                 "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=APIKEY",
               method: "GET",

               error: function() {
                 alert("uh oh something's wrong!");
               },
               success: function(data) {
                 processData(data);

               }
             });

             $("#USA").click(function(e){
                      e.preventDefault();
                      $.ajax({
                         cache: false,
                        url:
                          "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=APIKEY",
                        method: "GET",

                        error: function() {
                          alert("uh oh something's wrong!");
                        },
                        success: function(data) {
                          processData(data);

                        }
                      });

//takes you back to the 'homepage' of new york times when feedr logo is clicked
    $("#Feedr").click(function(e){
         e.preventDefault();
         $.ajax({
           cache: false,
           url:
           "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=APIKEY",
           method: "GET",

           error: function() {
           alert("uh oh something's wrong!");
           },
           success: function(data) {
             processData(data);

           }
             });

             $("#NYT").click(function(e){
               e.preventDefault();
               $.ajax({
                 cache: false,
                 url:
                 "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=a27cd5d4be5f45ed839104ae9e2d4fc1",
                 method: "GET",

                 error: function() {
                   alert("uh oh something's wrong!");
                   },
                    success: function(data) {
                        processData(data);

                                 }
                               });


 }); // closes out the feedr click
 }); // closes out NYT click function
}); // closes out usa
  });// closes out the "#bbc" click
  }); //******************* closing of the document ready function at top
