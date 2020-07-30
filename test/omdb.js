console.log("test");
// This function handles events where a movie search button is clicked
$("#search-btn").on("click", function(event) {

  event.preventDefault();
  
  // This line grabs the input from the textbox
  var movie = $("#search-input").val().trim();

  console.log(movie);

  displayMovieInfo(movie);

});


// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo(movie) {
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

    console.log(response);

    // Creates div to hold title and appends it
    var title = response.Title;
    $("#film_title").text(title);

    // Creates div to hold director and appends it
    var director = response.Director;
    $("#director").text(director);

    // Creates div to hold actors and appends it
    var actors = response.Actors;
    $("#actors").text(actors);

    // Creates div to hold release date and appends it
    var release_date = response.Released;
    $("#release_date").text(release_date); 

    // Creates div to hold plot and appends it
    var plot_summary = response.Plot;
    $("#plot_summary").text(plot_summary);


    // Creates div to hold box office earnings and appends it
    var box_office = response.BoxOffice;
    $("#box_office").text(box_office);


    // Creates div to hold director and appends it
    var film_rating = response.Rated;
    $("#film_rating").text(film_rating);

    // Creates div to hold the poster and appends it
    var film_poster = response.Poster;
    $("#film_poster").attr("src", film_poster);

    });
}
    

    