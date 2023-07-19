import { React } from "react";
import "../sass/TopTracksArtists.scss";
import { Audio } from "react-loader-spinner";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const TopTracksArtists = ({ topArtists, topTracks }) => {
  const navigate = useNavigate();
  const handleTrackInformation = (eachTrack) => {
    console.log(eachTrack);
    navigate(`/track/${eachTrack.id}`, { state: { track: eachTrack } });
  };

  return topArtists && topTracks ? (
    <div className="top-container">
      <div className="wrapper">
        <div className="mapping-wrapper">
          <div className="intro">
            <span className="title">Top Artists Of All time</span>
            <a href="/topArtists">
              <button>See More</button>
            </a>
          </div>
          {topArtists.map((artist) => {
            let key = artist.id;
            return (
              <div className="artists" key={key}>
                <img src={artist.images[0].url} alt="artist" />
                <span>{artist.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        <div className="mapping-wrapper">
          <div className="intro">
            <span className="title">Top Tracks Of All Time</span>
            <a href="/topTracks">
              <button>See More</button>
            </a>
          </div>
          {topTracks.map((tracks) => {
            let key = tracks.id;
            return (
              <div className="tracks" key={key}>
                <img src={tracks.album.images[0].url} alt="cover" />
                <div className="overlay">
                  <AiFillInfoCircle
                    onClick={() => handleTrackInformation(tracks)}
                    className="featuresIcon"
                  />
                </div>
                <div className="track-artist-name">
                  <span className="track-name">{tracks.name}</span>
                  <span className="artist-name">{tracks.artists[0].name}</span>
                </div>
              </div>
            );
          })}
        </div>
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
  );
};

export default TopTracksArtists;
