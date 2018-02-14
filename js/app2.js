/*
  Please add all Javascript code to this file.
*/




//**********TRYING WITH HANDLEBARS************//

//var source   = document.getElementById("main");


      //Compile the actual Template file
    //  var Template = Handlebars.compile(Source);
//var title = 'mytitle'

$(document).ready(function(){




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



function processData(data) {
  $(function(){




//   var template = Handlebars.compile($("#data-template").html());

  for (var i = 0; i < data.articles.length; i++) {
    var title = data.articles[i].title;
    var description = data.articles[i].description;
    var artUrl = data.articles[i].url;
    var urlToImage = data.articles[i].urlToImage;

    // var arr = new Array(1,2,3,4);
    // console.log(arr);
  // var titleArr = new Array(data.articles[i].title);


   var node = document.createElement("h3");
   var textnode = document.createTextNode(title);
   //node.appendChild(textnode);
   document.getElementById("title-id").appendChild(node);


    $('title-id').append(title);
  // document.getElementById("title-id").appendChild(node);
  // document.getElementById("99bottles-lyrics").appendChild(newNode);
   //newNode.appendChild(textnode);

   //var node = document.createElement("li");
  // var textnode = document.createTextNode("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");
   //node.appendChild(textnode);
   // var newNode = document.createElement("li");
   // var textnode = document.createTextNode(" " + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ");
   // document.getElementById("99bottles-lyrics").appendChild(node);
   // document.getElementById("99bottles-lyrics").appendChild(newNode);
   // newNode.appendChild(textnode);

//   var textnode = title
   //console.log(titleArr);
   console.log(title);
}
});
 }; //******************* closing of the document ready function at top
})

//the line below isn't neccessary
//    title.stringify = JSON.stringify(title);
//    var html = template(context);
//     var html = template(titleArr);
//
//
//     $('#title-id').html(html);
//     $('#pop-up-title').html(html);
//   //  var context = {title: title};
//     var context = {title: titleArr};
//
//
//     $("#title-id").append( template({context}) );
//
//
//     $("#pop-up-title").append( template({context}) );
//
//     $("#image-thumbnail").attr("src", urlToImage);
//
//
//       var html2 = template(context2);
//       $('#pop-up-description').html(html2);
//       var context2 = {description: description};
//
//       $("#pop-up-description").append(description);
//
//
//     $("#title-id").click(function(){
//       $("#popUp").removeClass('loader hidden');
//     });
//
//     $("#xOut").click(function(){
//       $("#popUp").addClass('loader hidden');
//     });
//
// //below is nothing
//     // $("#NYT").click(function(){
//     //   $("#NYTid").addClass('NYT article show');
//     // });
//
//     $('#link-to').click(function(){
//       location.href = artUrl + '_blank'
//     });
//
//     $("#search").click(function () {
//          $(this).toggleClass("active");
//          e.preventDefault(); /*ignores actual link*/
//      });
//
//     // console.log(title);
//     // console.log(data);
//     // console.log(description);
//     }
//       });
//     };


//***********OTHER PUBS ***************//
    // $("#BBC").click(function(e){
    //          e.preventDefault();
    //          $.ajax({
    //             cache: false,
    //            url:
    //              "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a27cd5d4be5f45ed839104ae9e2d4fc1",
    //            method: "GET",
    //
    //            error: function() {
    //              alert("uh oh something's wrong!");
    //            },
    //            success: function(data) {
    //              processData(data);
    //
    //            }
    //          });
    //
    //          $("#USA").click(function(e){
    //                   e.preventDefault();
    //                   $.ajax({
    //                      cache: false,
    //                     url:
    //                       "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=a27cd5d4be5f45ed839104ae9e2d4fc1",
    //                     method: "GET",
    //
    //                     error: function() {
    //                       alert("uh oh something's wrong!");
    //                     },
    //                     success: function(data) {
    //                       processData(data);
    //
    //                     }
    //                   });
    //
    //                   $("#Feedr").click(function(e){
    //                                      e.preventDefault();
    //                                      $.ajax({
    //                                         cache: false,
    //                                        url:
    //                                          "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=a27cd5d4be5f45ed839104ae9e2d4fc1",
    //                                        method: "GET",
    //
    //                                        error: function() {
    //                                          alert("uh oh something's wrong!");
    //                                        },
    //                                        success: function(data) {
    //                                          processData(data);
    //
    //                                        }
    //                                      });
    //
    //                   $("#NYT").click(function(e){
    //                            e.preventDefault();
    //                            $.ajax({
    //                               cache: false,
    //                              url:
    //                                "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=a27cd5d4be5f45ed839104ae9e2d4fc1",
    //                              method: "GET",
    //
    //                              error: function() {
    //                                alert("uh oh something's wrong!");
    //                              },
    //                              success: function(data) {
    //                                processData(data);
    //
    //                              }
    //                            });



 //}); // closes out the feedr click
 //}); // closes out NYT click function
//}); // closes out usa
//  });// closes out the "#bbc" onclick






  //   Handlebars.registerHelper('each', function(context, options) {
