import React from 'react'
import '../sass/Playlist.scss'
import { GetMyPlaylists } from '../hooks'

const Playlists = () => {

    const playlists = GetMyPlaylists();
    console.log(playlists)


    return (

        playlists && (
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
        )
    )
}

export default Playlists