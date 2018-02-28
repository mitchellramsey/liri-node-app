# liri-node-app

# Directions to use the LIRI APP

Welcome to Liri! This app can display your 20 most recent tweets, perform a movie and song search, or read the conents of a file and
perform what is the app to do (within the context of the tweets, movie, and song search);

In order to make this app effective, you will need to create a .env file. Within the .env file copy and paste the following:

# Spotify API Keys

SPOTIFY_ID= YOUR_SPOTIFY_ID
SPOTIFY_SECRET= YOUR_SPOTIFY_SECRET


# Twitter API Keys

TWITTER_CONSUMER_KEY=	YOUR_TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET= YOUR_TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN_KEY= 	YOUR_TWITTER_ACCESS_TOKEN_KEY
TWITTER_ACCESS_TOKEN_SECRET= YOUR_TWITTER_ACCESS_TOKEN_SECRET

**end of what needs to be copied**

You can obtain your spotify keys at https://beta.developer.spotify.com

You can obtain your twitter keys at https://apps.twitter.com


Also do not forget to call the node modules required for the app by typing **npm install** on your command prompt(without the asterisks)



# To show tweet history

On the command line type in the following: node liri.js my-tweets

The terminal will return your 20 most recent tweets. If your profile is new and you have less than 20 tweets,
then it will show your entire tweet history.


# To search for a song

On the command line type in the following: node liri.js spotify-this-song Song Title

You do not need to type in any quotes. The program is designed to recognize spaces and to keep reading until
the end of the line. This function will return the top 5 matches to the song title. Understand that some song
titles may have been used numerous times. Therefore you can also type the following in prompt:

node liri.js spotify-this-song Song Title Band Name

and the app will now likely return the sought after song.

The app will return the Song Title, Artist Name, Album Name, and a Preview Link for the top 5 results.

# To search for a movie

On the command line type in the following: node liri.js movie-this Movie Name

You do not need to type in any quotes. The program is designed to recognize spaces and to keep reading until
the end of the line. This function will return the sought after movie, the year created, its IMDB rating,
its Rotten Tomatoes Rating, the Country and language it was produced, a shortened plot, and its actors

# To Read the Random.Txt file

On the command line type in the following: node liri.js do-what-it-says

The app will read the type line of the random.txt file. You are able to edit this file, but just know that
the app can only read the type line and the only functions that the app can perform outside of
the "do-what-it-says" are the three funcitons listed above.