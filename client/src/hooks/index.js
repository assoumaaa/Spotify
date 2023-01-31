import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';


// GETTING TOKEN AND SETTING IT FOR API CALL USE ****************************************
let token = window.localStorage.getItem("token");
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);



export const Logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
}


// API CALLS ****************************************************************************



//  GETTING TOKEN 
//  CHECKING IF IT EXISTS IN LOCAL STORAGE IF NOT DOING API CALL AND RETURNING IT
export const GetToken = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.localStorage.setItem("token", token)
        }


        var uri = window.location.toString();

        if (uri.indexOf("#") > 0) {
            var clean_uri = uri.substring(0,
                uri.indexOf("#"));

            window.history.replaceState({},
                document.title, clean_uri);
            window.location.reload();
        }
        setToken(token)
    }, [])
    return { token }
}


// API CALLs TO GET INFORMATION ABOUT USER, FOLLOWING, PLAYLIST COUNT
export const GetUserInfo = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        Promise.all([
            spotifyApi.getMe(),
            spotifyApi.getFollowedArtists(),
            spotifyApi.getUserPlaylists()
        ]).then(responses => {
            setInfo({
                user: responses[0],
                following: responses[1],
                playlists: responses[2]
            });
        }).catch(err => {
            console.log('Something went wrong!', err);
        });
    }, []);
    return info;
};


// API CALL TO GET THE TOP TRACKS OF A USER
export const GetTopTracks = () => {
    const [tracks, setTracks] = useState({})
    useEffect(() => {
        spotifyApi.getMyTopTracks()
            .then(function (data) {
                setTracks(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, []);
    return tracks;
}

// API CALL TO GET THE TOP ARTISTS OF A USER
export const GetTopArtists = () => {
    const [artists, setArtists] = useState({})
    useEffect(() => {
        spotifyApi.getMyTopArtists()
            .then(function (data) {
                setArtists(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, []);
    return artists;
}


export const GetArtistsTracks = () => {
    const [top, setTop] = useState({})

    useEffect(() => {
        Promise.all([
            spotifyApi.getMyTopArtists({ time_range: 'long_term' }),
            spotifyApi.getMyTopTracks({ time_range: 'long_term' }),
        ]).then(responses => {
            setTop({
                topArtists: responses[0].items,
                topTracks: responses[1].items
            });
        }).catch(err => {
            console.log('Something went wrong!', err);
            return err;
        });
    }, []);

    return top;
}









