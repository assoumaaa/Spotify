import React, { useEffect, useState } from 'react'
import '../sass/TopArtists.scss'
import { GetTopArtists } from '../hooks';

const TopArtists = () => {

  const [filter, setFilter] = useState('All Time');
  const artists = GetTopArtists(filter)
  const options = ['All Time', 'Last 6 Months', 'Last 4 Weeks'];

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  };

  return (
    artists && (
      <div className="topArtists">
        <div className="titles">
          <span>Top Artists</span>
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
            artists.map((eachArtists) => {
              return (
                <div className="eachArtists" key={eachArtists.id}>
                  <img src={eachArtists.images[0].url} alt='artists'/>
                  <span>{eachArtists.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  )
}

export default TopArtists