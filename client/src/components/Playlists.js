import React from 'react'
import '../sass/Playlist.scss'
import { GetMyPlaylists } from '../hooks'
import { Audio } from 'react-loader-spinner'


const Playlists = () => {

    const playlists = GetMyPlaylists();
    console.log(playlists)


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
                                <div className="eachArtists" key={eachPlaylist.id}>
                                    <img src={eachPlaylist.images[0].url} alt='artists' />
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