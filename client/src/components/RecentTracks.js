import React from 'react'
import { GetRecentTracks } from '../hooks';
import { formatDurationForHumans } from '../utils/index'
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import { Audio } from 'react-loader-spinner'
import '../sass/TopTracks.scss'



const RecentTracks = () => {

    const navigate = useNavigate()
    const recentTracks = GetRecentTracks()

    console.log(recentTracks);


    const handleTrackInformation = (eachTrack) => {
        navigate(`/track/${eachTrack.track.id}`, { state: { track: eachTrack.track } });
    }


    return (
        recentTracks ? (
            <div className="topTracks">
                <div className="titles">
                    <h1>Recently Played Tracks</h1>
                </div>
                <div className="info">
                    {
                        recentTracks.map((eachTrack) => {
                            return (
                                <div className="eachTrack" key={eachTrack.id}>
                                    <div className="image-container">
                                        <img src={eachTrack.track.album.images[0].url} alt='track' />
                                        <div className="overlay">
                                            <AiFillInfoCircle onClick={() => handleTrackInformation(eachTrack)} className='featuresIcon' />
                                        </div>
                                    </div>
                                    <div className="trackInformation">
                                        <div className="left">
                                            <span className='track-name'>{eachTrack.track.name}</span>
                                            <span className='artist-name' >{eachTrack.track.artists[0].name}</span>
                                        </div>
                                        <div className="right">
                                            <span className='artist-name' >{formatDurationForHumans(eachTrack.track.duration_ms)}</span>
                                            <span className='release'>{eachTrack.track.album.release_date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        ) : (
            <div className="loading">
                <Audio
                    height="120"
                    width="190"
                    radius="9"
                    color="gray"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        )
    )
}
export default RecentTracks