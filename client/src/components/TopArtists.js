import React, { useState } from 'react'
import '../sass/TopArtists.scss'
import { GetTopArtists } from '../hooks';
import { Audio } from 'react-loader-spinner'


const TopArtists = () => {

  const [filter, setFilter] = useState('All Time');
  const artists = GetTopArtists(filter)
  const options = ['All Time', 'Last 6 Months', 'Last 4 Weeks'];

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  };

  
  return (
    artists ? (
      <div className="topArtists">
        <div className="titles">
          <h1>Top Artists</h1>
          <div className="sorting">
            {options.map(eachOption => {
              return <span
                key={eachOption}
                onClick={handleClick}
                className={filter === eachOption ? 'selected' : ''}>
                {eachOption}
              </span>
            })}
          </div>
        </div>
        <div className="info">
          {
            artists.map((eachArtists) => {
              return (
                <div className="eachArtists" key={eachArtists.id}>
                  <img src={eachArtists.images[0].url} alt='artists' />
                  <span>{eachArtists.name}</span>
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

export default TopArtists