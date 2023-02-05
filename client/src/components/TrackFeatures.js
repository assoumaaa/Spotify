import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { GetTrackAnalaysis, GetTrackFeatures } from '../hooks';
import '../sass/TrackFeatures.scss'
import { Chart } from "react-google-charts";



const TrackFeatures = () => {

    const trackID = useParams();
    const features = GetTrackFeatures(trackID.trackID);

    const location = useLocation()
    const eachTrack = location.state.track

    const analysis = GetTrackAnalaysis(trackID.trackID);




    console.log(features);
    console.log(eachTrack);
    console.log(analysis);
    return (
        <div className="trackFeatures">
            <img src={eachTrack.album.images[0].url} alt='track' />
            <div className="trackDetails">
                <span className='track-name'>{eachTrack.name}</span>
                <span className='artist-name' >{eachTrack.artists[0].name}</span>
                <span className='release'>{eachTrack.album.release_date}</span>
                <a href={eachTrack.external_urls.spotify} target="_blank"><button>Play on Spotify</button></a>
            </div>
            <div className="grid">
                <Chart
                    chartType="BarChart"
                    data={[["acousticness", "danceability"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                />
            </div>
        </div >
    )
}

export default TrackFeatures