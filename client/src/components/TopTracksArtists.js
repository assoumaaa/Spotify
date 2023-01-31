import React from 'react'
import '../sass/TopTracksArtists.scss'

const TopTracksArtists = ({ topArtists, topTracks }) => {

    console.log(topTracks);


    return (
        topArtists && topTracks && (
            <div className="top-container">
                <div className="wrapper">
                    <div className="mapping-wrapper">
                        <div className="intro">
                            <span className='title'>Top Artists Of All time</span>
                            <a href='/topArtists'><button>See More</button></a>
                        </div>
                        {topArtists.map(artist => (
                            <div className="artists">
                                <img src={artist.images[2].url} alt='artist'/>
                                <span >{artist.name}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="wrapper">
                    <div className="mapping-wrapper">
                        <div className="intro">
                            <span className='title'>Top Tracks Of All Time</span>
                            <button>See More</button>
                        </div>
                        {topTracks.map(tracks => (
                            <div className="tracks">
                                <img src={tracks.album.images[2].url} alt='cover'/>
                                <div className="track-artist-name">
                                    <span className='track-name'>{tracks.name}</span>
                                    <span className='artist-name' >{tracks.artists[0].name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}

export default TopTracksArtists