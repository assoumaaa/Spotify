import React from 'react';
import Nav from './Nav';
import User from './User';
import TopArtists from './TopArtists'
import TopTracks from './TopTracks';
import TrackFeatures from './TrackFeatures';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../sass/Profile.scss'
import RecentTracks from './RecentTracks';
import Playlists from './Playlists';
import PlaylistFeatures from './PlaylistFeatures';


const Profile = () => {
    
    return (
        <div className="profile">
            <BrowserRouter>
                <Nav />
                <div className="sections">
                    <Routes>
                        <Route path='/' element={<User />} />
                        <Route path='/topArtists' element={<TopArtists />} />
                        <Route path='/topTracks' element={<TopTracks />} />
                        <Route path='/track/:trackID' element={<TrackFeatures />} />
                        <Route path='/playlist/:playlistID' element={<PlaylistFeatures />} />
                        <Route path='/recentTracks' element={<RecentTracks />} />
                        <Route path='/playlists' element={<Playlists />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Profile
