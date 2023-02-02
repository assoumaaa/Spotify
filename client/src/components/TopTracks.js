import React, { useState } from 'react'
import { GetTopTracks } from '../hooks';
import '../sass/TopTracks.scss'


const TopTracks = () => {

  const [filter, setFilter] = useState('All Time');
  const options = ['All Time', 'Last 6 Months', 'Last 4 Weeks'];
  const tracks = GetTopTracks(filter)

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  };

  console.log(tracks);

  return (
    tracks !== undefined && (
      <div className="topTracks">
        <div className="titles">
          <span>Top Tracks</span>
          <div className="sorting">
            {options.map(eachOption => {
              return <a
                key={eachOption}
                onClick={handleClick}
                className={filter === eachOption ? 'selected' : ''}>
                {eachOption}
              </a>
            })}
          </div>
        </div>
        <div className="info">
          {
            tracks.map((eachTrack) => {
              return (
                <div className="eachTrack" key={eachTrack.id}>
                  <img src={eachTrack.album.images[0].url} alt='track' />
                  <div className="track-artist-name">
                    <span className='track-name'>{eachTrack.name}</span>
                    <span className='artist-name' >{eachTrack.artists[0].name}</span>
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
export default TopTracks