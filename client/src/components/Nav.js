import React from 'react';
import '../sass/Nav.scss';
import { BsSpotify } from "react-icons/bs";
import { RiUser3Fill, RiMusic2Fill, RiPlayList2Fill, RiMicFill, RiSkipBackFill } from "react-icons/ri";


const Nav = () => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="spotify-logo"><BsSpotify className='logo spotify' /></div>
                <div className="list">
                    <div className="bar-items">
                        <a href='/'>
                            <div className="information">
                                <div className="icon"><RiUser3Fill /></div>
                                <span>Profile</span>
                            </div>
                        </a>
                    </div>
                    <div className="bar-items">
                        <a href='/topArtists'>
                            <div className="information">
                                <div className="icon"><RiMicFill /></div>
                                <span>Top Artists</span>
                            </div>
                        </a>
                    </div>
                    <div className="bar-items">
                        <a href=''>
                            <div className="information">
                                <div className="icon"><RiMusic2Fill /></div>
                                <span>Top Tracks</span>
                            </div>
                        </a>
                    </div>
                    <div className="bar-items">
                        <a href=''>
                            <div className="information">
                                <div className="icon"><RiSkipBackFill /></div>
                                <span>Recent</span>
                            </div>
                        </a>
                    </div>
                    <div className="bar-items">
                        <a href=''>
                            <div className="information">
                                <div className="icon"><RiPlayList2Fill /></div>
                                <span>Playlists</span>
                            </div>
                        </a>
                    </div>
                </div>
                <a href='https://omar-assouma.netlify.app/'><div className="myIcon"> 👨🏻‍💻 </div></a>
            </div>
        </div>
    )
}

export default Nav