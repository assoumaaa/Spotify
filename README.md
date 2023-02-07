<img width="1440" alt="Screen Shot 2023-02-07 at 1 55 57 PM" src="https://user-images.githubusercontent.com/94231603/217238470-92e93343-c024-426d-8cb5-75fb3439440d.png">


# [Spotify Analyser](https://spotify-analyser.herokuapp.com)

Welcome to Spotify Analyser, a web application that lets you track your top artists, top tracks, and find your top artists and tracks according to a specific time range, all while offering detailed features of each track and allowing you to play them directly on your Spotify account.

# Features

- Login with your Spotify account
- Track your top artists and top tracks
- Find your top artists and tracks according to a specific time range
- View detailed features of each track
- Play tracks directly from the web application to your Spotify account
- See your recent listed tracks and playlists with details about them


# Technology Stack

Spotify Analyser was created using:
  - ReactJS for front-end development
  - NodeJS for server-side development
  - [SpotifyAPI](https://developer.spotify.com/documentation/web-api/quick-start/) that uses OAuth2.0 for authentication
  - ExpressJS for building the back-end server

# Testing the application

If you're interested in testing the application, please email me at omarassouma@hotmail.com with your name, email address that you used to log into Spotify, and a short message indicating your interest in testing the application. I  will then add you to the developers list, and you will be able to access it through https://spotify-analyser.herokuapp.com .

# Setup
  1. [Register a Spotify App](https://developer.spotify.com/dashboard/) and add `http://localhost:8888/callback` as a Redirect URI in the app settings
  2. Create an `.env` file in the root of the project based on `.env.example`
  3. `nvm use`
  4. `yarn && yarn client:install`
  5. `yarn dev`

# Logging Out

If you want to logout and log in with a different account, make sure to first press in the Safari app on your Mac, choose Safari > Settings, then click Privacy. Click Manage Website Data and search for https://spotify-analyser.herokuapp.com

# Limitations

Please note that in development mode, the application can only accommodate a maximum of 25 users due to Spotify Rules.
