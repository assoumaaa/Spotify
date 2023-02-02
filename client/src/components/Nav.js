import React, { useState } from 'react';
import '../sass/Nav.scss';
import { BsSpotify } from "react-icons/bs";
import { RiUser3Fill, RiMusic2Fill, RiPlayList2Fill, RiMicFill, RiSkipBackFill } from "react-icons/ri";


const Nav = () => {

    const navTitles = ['Profile', 'Top Artists', 'Top Tracks', 'Recent', 'Playlists']
    const navIcons = [<RiUser3Fill />, <RiMicFill />, <RiMusic2Fill />, <RiSkipBackFill />, <RiPlayList2Fill />]
    const hrefs = ['/', '/topArtists', '/', '/', '/']
    const [selectedIndex, setSelectedIndex] = useState(0);



    return (
        <div className="nav">
            <div className="wrapper">
                <div className="spotify-logo"><BsSpotify className='logo spotify' /></div>
                <div className="list">
                    {
                        navTitles.map((title, index) => (
                            <div className={`bar-items ${index === selectedIndex ? 'selected' : ''}`} onClick={() => setSelectedIndex(index)}>
                                <a href={hrefs[index]} >
                                    <div className="information">
                                        <div className="icon">{navIcons[index]}</div>
                                        <span>{title}</span>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <a href='https://omar-assouma.netlify.app/'><div className="myIcon"> 👨🏻‍💻 </div></a>
            </div>
        </div>
    )
}

export default Nav