import React from 'react'
import '../sass/Playlist.scss'
import { GetMyPlaylists } from '../hooks'
import { Audio } from 'react-loader-spinner'
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"




const Playlists = () => {

    const playlists = GetMyPlaylists();
    const navigate = useNavigate();


    const handleTrackInformation = (eachPlaylist) => {
        console.log(eachPlaylist)
        navigate(`/playlist/${eachPlaylist.id}`, { state: { playlist: eachPlaylist } });
    }


    return (

        playlists ? (
            <div className="playlist">
                <div className="titles">
                    <h1>Your Playlists</h1>
                </div>
                <div className="info">
                    {
                        playlists.map((eachPlaylist) => {
                            return (
                                <div className="eachPlaylist" key={eachPlaylist.id}>
                                    <div className="image-container">
                                        {
                                            eachPlaylist.images[0] ? (
                                                <>
                                                    <img src={eachPlaylist.images[0].url} alt='artists' />
                                                    <div className="overlay">
                                                        <AiFillInfoCircle className='featuresIcon' onClick={() => handleTrackInformation(eachPlaylist)} />
                                                    </div>
                                                </>
                                            ) : <>
                                                <img src='https://i.pinimg.com/736x/a1/72/1e/a1721e36d881dba6393f04b60e80181b.jpg' alt='playlistImage' />
                                                <div className="overlay">
                                                    <AiFillInfoCircle className='featuresIcon' onClick={() => handleTrackInformation(eachPlaylist)} />
                                                </div>
                                            </>



                                        }
                                    </div>
                                    <div className="name_tracks">
                                        <span className='name'>{eachPlaylist.name}</span>
                                        <span className='count'>{eachPlaylist.tracks.total} TRACKS</span>
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

export default Playlists