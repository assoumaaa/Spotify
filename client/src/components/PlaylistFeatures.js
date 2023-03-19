import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { GetPlaylistTracks } from '../hooks';
import { formatDurationForHumans } from '../utils/index'
import '../sass/PlaylistFeatures.scss'
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"





const PlaylistFeatures = () => {

    const navigate = useNavigate();
    const playlistID = useParams();
    const location = useLocation();
    const eachPlaylist = location.state.playlist;

    const playlistTracks = GetPlaylistTracks(playlistID.playlistID);








    const handleTrackInformation = (eachTrack) => {
        console.log(eachTrack);
        navigate(`/track/${eachTrack.track.id}`, { state: { track: eachTrack.track } });
    }


    return (

        playlistTracks && (
            <div className="playlistTracks">
                <div className="left">
                    {
                        eachPlaylist.images[0] ? (
                            <img src={eachPlaylist.images[0].url} alt='track' />
                        ) : <img src='https://i.pinimg.com/736x/a1/72/1e/a1721e36d881dba6393f04b60e80181b.jpg' alt='playlistImage' />

                    }
                    <div className="playlistDetails">
                        <span className='playlist-name'>{eachPlaylist.name}</span>
                        <span className='owner' >By {eachPlaylist.owner.display_name}</span>
                        <span className='owner' >{eachPlaylist.tracks.total} Tracks </span>
                    </div>
                    <div className="chart">
                    </div>

                </div>
                <div className="right">
                    {
                        playlistTracks.map((eachTrack) => {
                            return (
                                <div className="eachTrack" key={eachTrack.track.id}>
                                    <div className="image-container">
                                        <img src={eachTrack.track.album.images[0].url} alt='track' />
                                        <div className="overlay">
                                            <AiFillInfoCircle onClick={() => handleTrackInformation(eachTrack)} className='featuresIcon' />
                                        </div>
                                    </div>
                                    <div className="trackInformation">
                                        <div className="leftt">
                                            <span className='track-name'>{eachTrack.track.name}</span>
                                            <span className='artist-name' >{eachTrack.track.artists[0].name}</span>
                                        </div>
                                        <div className="rightt">
                                            <span className='duration' >{formatDurationForHumans(eachTrack.track.duration_ms)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    )
}

export default PlaylistFeatures