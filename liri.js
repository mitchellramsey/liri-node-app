require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");
var fs = require("fs");

var liriRequest = process.argv[2];
var liriParameters = [];
for(i=3; i<process.argv.length; i++){
    liriParameters.push(process.argv[i]);
}
// console.log(liriParameters);
appDirection();


function movieCall() {
    var movieName = "";
    if(liriParameters.length > 0){
        for(var i = 0; i<liriParameters.length; i++){
            movieName += liriParameters[i]+ "+";
        }
        movieName = movieName.slice(0,-1);
    }else {
        movieName = "Mr+Nobody";
    }
    // console.log(movieName);
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // console.log(queryURL);
    request(queryURL, function(error,response,data) {
        var movieObject = JSON.parse(data);
        console.log(movieObject);
        if(!error && response.statusCode === 200) {
            console.log("===================================");
            console.log("Your Movie Results: ");
            console.log("===================================");
            console.log("Title: " + movieObject.Title +
                        "\nYear: " + movieObject.Year +
                        "\nIMDB Rating: " + movieObject.imdbRating);
            if(movieObject.Ratings){
                var notRottenTomatoes = 0;            
                for(var i = 0; i < movieObject.Ratings.length; i++){
                    if(movieObject.Ratings[i].Source === 'Rotten Tomatoes'){
                        console.log("Rotten Tomatoes Rating: " + movieObject.Ratings[i].Value);
                    }else {
                        notRottenTomatoes++;
                        if(notRottenTomatoes === movieObject.Ratings.length){
                            console.log("Rotten Tomatoes Rating: N/A");
                        }
                    }
                }
            }
                console.log("Country: " + movieObject.Country +
                        "\nLanguage: " + movieObject.Language +
                        "\nPlot: "+ movieObject.Plot +
                        "\nActors: " + movieObject.Actors);
        } else{
            console.log("There was an error");
        }
    });
}

function twitterCall() {
    var client = new Twitter(keys.twitter);
    var params = {
        username: 'MRamseyCoding'
    };
    console.log("My Most Recent Tweets");
    console.log("===================================");
    client.get('statuses/user_timeline',params, function(error, tweets, response) {
        if(!error) {
            if(tweets.length > 20){
                for(var i = 0; i < 20; i++){
                    console.log(tweets[i].text);
                    console.log("===================================");
                }
            }else {
                for(var i = 0; i < tweets.length; i++){
                    console.log(tweets[i].text);
                    console.log("===================================");
                }
            }
        } else {
            console.log('There was an error');
        }
    });
}

function spotifyCall() {
    var spotify = new Spotify(keys.spotify);
    
    var songTitle = "";
    for(var i = 0; i < liriParameters.length; i++){
        songTitle += liriParameters[i] + " ";
    }
    console.log(songTitle);
    spotify
        .search({ type: 'track', query: songTitle, limit: 5}, function(err,data) {
            if(err) {
                return console.log('Error occurred: ' + err);
            } else {
                var songData = data.tracks.items;
                console.log("===================================");
                for(var i = 0; i<songData.length; i++){
                    console.log("Song Title: " + songData[i].name +
                    "\nArtist Name: " + songData[i].artists[0].name +
                    "\nAlbum Name: " + songData[i].album.name +
                    "\nPreview Link : "+ songData[i].preview_url);
                    console.log("===================================");
                }
                

            }
        });
}

function documentCall () {
    fs.readFile("random.txt", "utf8", function(error,data) {
        if(error) {
            return console.log(error);
        } 
        var dataArr = data.split(",");
        liriRequest = dataArr[0];
        for(var i = 1; i < dataArr.length; i++){
            liriParameters.push(dataArr[i]);
        }
        // console.log(liriParameters);
        // console.log(liriRequest);
        
        appDirection();
    });
    
}

function appDirection() {
    switch(liriRequest) {
        case "my-tweets":
            twitterCall();
            break;
        case "spotify-this-song":
            spotifyCall();
            break;
        case "movie-this":
            movieCall();
            break;
        case "do-what-it-says":
            documentCall();
            break;
    
    }
}