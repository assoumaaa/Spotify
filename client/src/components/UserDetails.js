import React from 'react'
import '../sass/UserDetails.scss'
import { Logout } from '../hooks/index'


const UserDetails = ({ user, following, playlists }) => {

    return (
        <div className="avatar">
            <img src={user.images[0].url} alt='user_picture' />
            <div className="information-wrapper">
            <span className='username'>{user.display_name}</span>
                <div className="user-information">
                    <div className="each">
                        <span className='numbers'>{user.followers.total}</span>
                        <span> Followers </span>
                    </div>
                    <div className="each">
                        <span className='numbers'>{following.artists.total}</span>
                        <span> Following </span>
                    </div>
                    <div className="each">
                        <span className='numbers'>{playlists.total}</span>
                        <span> Playlists </span>
                    </div>
                </div>
                
                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}

export default UserDetails