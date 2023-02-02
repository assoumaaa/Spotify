
import '../sass/User.scss'
import React from 'react';
import { GetUserInfo, GetArtistsTracks } from '../hooks/index'
import UserDetails from './UserDetails';
import TopTracksArtists from './TopTracksArtists';


const User = () => {

  const { user, following, playlists } = GetUserInfo();
  const { topArtists, topTracks } = GetArtistsTracks();
  
  return (
    user && (
      <>
        <UserDetails user={user} following={following} playlists={playlists} />
        <TopTracksArtists topArtists={topArtists} topTracks={topTracks} />
      </>
    )
  );
};

export default User;
