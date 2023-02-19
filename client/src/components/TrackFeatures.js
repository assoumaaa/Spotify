import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { GetTrackAnalaysis, GetTrackFeatures } from '../hooks';
import '../sass/TrackFeatures.scss'
import BarChart from './BarChart';



const TrackFeatures = () => {

    const trackID = useParams();
    const features = GetTrackFeatures(trackID.trackID);
    const analysis = GetTrackAnalaysis(trackID.trackID);

    const location = useLocation()
    const eachTrack = location.state.track


    const data = [
        ['Feature', 'Value', { role: 'style' }],
        ['Acousticness', features.acousticness, '#eb4034'],
        ['Danceability', features.danceability, '#e85c10'],
        ['Energy', features.energy, '#0c4dcf'],
        ['Liveness', features.liveness, '#79219e'],
        ['Speechiness', features.speechiness, '#3bbf56'],
        ['Valence', features.valence, '#66222b'],
    ];


    

    return (
        <div className="trackFeatures">
            <div className="track-container">
                <img src={eachTrack.album.images[0].url} alt='track' />
                <div className="trackDetails">
                    <span className='track-name'>{eachTrack.name}</span>
                    <span className='artist-name' >{eachTrack.artists[0].name}</span>
                    <span className='release'>{eachTrack.album.release_date}</span>
                    <a href={eachTrack.external_urls.spotify} target="_blank"><button>Play on Spotify</button></a>
                </div>
            </div>
            <div className="chart">
                <BarChart data={data} />
            </div>
        </div >
    )
}

export default TrackFeatures