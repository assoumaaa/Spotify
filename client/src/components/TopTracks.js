import React, { useState } from 'react'
import { GetTopTracks } from '../hooks';
import { formatDurationForHumans } from '../utils/index'
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import { Audio } from 'react-loader-spinner'
import '../sass/TopTracks.scss'




const TopTracks = () => {

  const navigate = useNavigate()
  const [filter, setFilter] = useState('All Time');
  const options = ['All Time', 'Last 6 Months', 'Last 4 Weeks'];
  const tracks = GetTopTracks(filter)

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  };

  const handleTrackInformation = (eachTrack) => {
    console.log(eachTrack);
    navigate(`/track/${eachTrack.id}`, { state: { track: eachTrack } });
  }


  return (
    tracks ? (
      <div className="topTracks">
        <div className="titles">
          <h1>Top Tracks</h1>
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
            tracks.map((eachTrack) => {
              return (
                <div className="eachTrack" key={eachTrack.id}>
                  <div className="image-container">
                    <img src={eachTrack.album.images[0].url} alt='track' />
                    <div className="overlay">
                      <AiFillInfoCircle onClick={() => handleTrackInformation(eachTrack)} className='featuresIcon' />
                    </div>
                  </div>
                  <div className="trackInformation">
                    <div className="left">
                      <span className='track-name'>{eachTrack.name}</span>
                      <span className='artist-name' >{eachTrack.artists[0].name}</span>
                    </div>
                    <div className="right">
                      <span className='artist-name' >{formatDurationForHumans(eachTrack.duration_ms)}</span>
                      <span className='release'>{eachTrack.album.release_date}</span>
                    </div>
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
export default TopTracks