import { React, useState } from 'react'
import '../sass/TopTracksArtists.scss'
import Loading from './Loading';



const TopTracksArtists = ({ topArtists, topTracks }) => {

    const [isLoading, setIsLoading] = useState(true);
    if (isLoading) {
        setIsLoading(false);
    }
    
    return (
        topArtists && topTracks ? (
            <div className="top-container">
                <div className="wrapper">
                    <div className="mapping-wrapper">
                        <div className="intro">
                            <span className='title'>Top Artists Of All time</span>
                            <a href='/topArtists'><button>See More</button></a>
                        </div>
                        {topArtists.map(artist => {
                            let key = artist.id;
                            return (
                                <div className="artists" key={key}>
                                    <img src={artist.images[0].url} alt='artist' />
                                    <span >{artist.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="wrapper">
                    <div className="mapping-wrapper">
                        <div className="intro">
                            <span className='title'>Top Tracks Of All Time</span>
                            <a href='/topTracks'><button>See More</button></a>
                        </div>
                        {topTracks.map(tracks => {
                            let key = tracks.id;
                            return (
                                <div className="tracks" key={key}>
                                    <img src={tracks.album.images[0].url} alt='cover' />
                                    <div className="track-artist-name">
                                        <span className='track-name'>{tracks.name}</span>
                                        <span className='artist-name' >{tracks.artists[0].name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        ) : (
            <Loading />
        )
    )
}

export default TopTracksArtists