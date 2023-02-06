import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';
import { removeHash } from '../utils';



var spotifyApi = new SpotifyWebApi();



// TOKEN ***********************************************************************************************

const EXPIRATION_TIME = 3600 * 1000;// 1 hour
let token = window.localStorage.getItem("token");

const getLocalAccessToken = () => window.localStorage.getItem('token')
const getLocalRefreshToken = () => window.localStorage.getItem('refresh_token');
const getLocalTimeStamp = () => window.localStorage.getItem('token_timestamp')

const setLocalAccessToken = token => window.localStorage.setItem("token", token)
const setLocalTimeStamp = () => window.localStorage.setItem("token_timestamp", Date.now())
const setLocalRefreshToken = refresh_token => window.localStorage.setItem("refresh_token", refresh_token)

spotifyApi.setAccessToken(token);



export const GetToken = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash

        let token = getLocalAccessToken()
        let tokenTimeStamp = getLocalTimeStamp()
        let refresh_token = getLocalRefreshToken()


        if (hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            refresh_token = hash.substring(1).split("&").find(elem => elem.startsWith("refresh_token")).split("=")[1]
            setLocalAccessToken(token)
            setLocalTimeStamp()
            setLocalRefreshToken(refresh_token)
            removeHash()
            window.location.reload()
        }


        if (Date.now() - parseInt(tokenTimeStamp) > EXPIRATION_TIME ) {
            console.warn('Access token has expired, refreshing...');
            refreshAccessToken().then(newToken => {
                setLocalAccessToken(newToken);
                setLocalTimeStamp();
                window.location.reload();
            });
        }

        if (!token) {
            console.warn('refreshing access token.....');
            refreshAccessToken().then(newToken => {
                setLocalAccessToken(newToken);
                setLocalTimeStamp();
                window.location.reload();
            });
        }

        setToken(token)
    }, [])

    return { token }
}


//

// REFRESH THE TOKEN
const refreshAccessToken = async () => {
    try {
        const { data } = await axios.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
        return data.access_token;
    } catch (e) {
        console.error(e);
    }
};


// LOGOUT
export const Logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("token_timestamp");
    window.location.reload();
}



// API CALLS ***********************************************************************************************


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
export const GetTopTracks = (filter) => {

    if (filter === "All Time") filter = 'long_term';
    else if (filter === "Last 6 Months") filter = 'medium_term';
    else filter = 'short_term';

    const [tracks, setTracks] = useState({})
    useEffect(() => {
        spotifyApi.getMyTopTracks({ time_range: filter })
            .then(function (data) {
                setTracks(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, [filter]);

    return tracks.items;
}


// API CALL TO GET THE TOP ARTISTS OF A USER GIVEN FILTER RANGE
export const GetTopArtists = (filter) => {

    if (filter === "All Time") filter = 'long_term';
    else if (filter === "Last 6 Months") filter = 'medium_term';
    else filter = 'short_term';

    const [artists, setArtists] = useState({})
    useEffect(() => {
        spotifyApi.getMyTopArtists({ time_range: filter })
            .then(function (data) {
                setArtists(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, [filter]);

    return artists.items;
}


// API CALL TO GET BOTH TOP ARTISTS AND TRACKS
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


// API CALL TO GET FEATURES OF A TRACK GIVEN THE ID
export const GetTrackFeatures = (id) => {

    const [features, setFeatures] = useState({})
    useEffect(() => {
        spotifyApi.getAudioFeaturesForTrack(id)
            .then(function (data) {
                setFeatures(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, [id]);

    return features;
}

// API CALL TO GET ANALYSIS OF A TRACK GIVEN THE ID
export const GetTrackAnalaysis = (id) => {

    const [analysis, setAnalaysis] = useState({})
    useEffect(() => {
        spotifyApi.getAudioAnalysisForTrack(id)
            .then(function (data) {
                setAnalaysis(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, [id]);

    return analysis;
}


// API CALL TO GET RECENT TRACK
export const GetRecentTracks = () => {

    const [recentTracks, setRecentTracks] = useState({})
    useEffect(() => {
        spotifyApi.getMyRecentlyPlayedTracks()
            .then(function (data) {
                setRecentTracks(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, []);

    return recentTracks.items;
}


// API CALL TO GET PLAYLISTS OF A USER
export const GetMyPlaylists = () => {

    const [playlists, setPlaylists] = useState({})
    useEffect(() => {
        spotifyApi.getUserPlaylists()
            .then(function (data) {
                setPlaylists(data);
            }, function (err) {
                console.log('Something went wrong!', err);
                return err;
            });
    }, []);

    return playlists.items;
}









