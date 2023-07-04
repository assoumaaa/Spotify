import React from 'react'
import '../sass/UserDetails.scss'
import { Logout } from '../hooks/index'
import { HiOutlineUserCircle } from "react-icons/hi2";



const UserDetails = ({ user, following, playlists }) => {

    console.log(user)

    return (
        <div className="avatar">
            {
                user.images[0] ? (
                    <img src={user.images[1].url} alt='user_picture' />
                ) : <HiOutlineUserCircle className='noImageIcon'/>
            }
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