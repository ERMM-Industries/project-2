// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo(movie) {

        
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);

        // Creating a div to hold the movie
        var movieDiv = $("<div class='movie'>");

        // Creates div to hold title and appends it
        var title = response.Title;
        var titleElement = $("<p>").text("Title: " + title);
        movieDiv.append(titleElement);

        // Creates div to hold director and appends it
        var director = response.Director;
        var directorElement = $("<p>").text("Director: " + director);
        movieDiv.append(directorElement);

        // Creates div to hold actors and appends it
        var actors = response.Actors;
        var actorsElement = $("<p>").text("Actors: " + actors);

        // Creates div to hold release date and appends it
        var released = response.Released;
        var releasedElement = $("<p>").text("Released: " + released);
        movieDiv.append(releasedElement);

        // Creates div to hold plot and appends it
        var plot = response.Plot;
        var plotElement = $("<p>").text("Plot: " + plot);
        movieDiv.append(plotElement);

        // budget
        // No budget variable offered

        // Creates div to hold box office earnings and appends it
        var box_office = response.BoxOffice;
        var box_officeElement = $("<p>").text("Box Office: " + box_office);
        movieDiv.append(box_officeElement);


        // Creates div to hold director and appends it
        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        movieDiv.append(pOne);

        // Creates div to hold director and appends it
        var released = response.Released;
        var pTwo = $("<p>").text("Released: " + released);
        movieDiv.append(pTwo);

        // Creates div to hold the poster and appends it
        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        movieDiv.append(image);

        // Putting the entire movie above the previous movies
        $("#movies-view").html(movieDiv);
    });

  }

  // This function handles events where a movie search button is clicked
  $("#search-movie").on("click", function(event) {

    event.preventDefault();

    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    console.log(movie);
    
    displayMovieInfo(movie);
    
  });