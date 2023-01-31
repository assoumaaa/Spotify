import React from 'react'
import '../sass/TopTracksArtists.scss'

const TopTracksArtists = ({ topArtists, topTracks }) => {

    console.log(topArtists);


    return (
        topArtists && topTracks && (
            <div className="top-container">
                <div className="wrapper">
                    <span className='title'>Top Artists Of All time</span>
                    <div className="mapping-wrapper">
                        {topArtists.map(artist => (
                            <div className="artists">
                                <img src={artist.images[2].url} />
                                <span >{artist.name}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="wrapper">
                    <span className='title'>Top Tracks Of All Time</span>
                    <div className="mapping-wrapper">
                        {topTracks.map(tracks => (
                            <span >{tracks.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}

export default TopTracksArtists