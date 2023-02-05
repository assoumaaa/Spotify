import React, { useState, useEffect } from 'react';
import '../sass/Nav.scss';
import { BsSpotify } from "react-icons/bs";
import { RiUser3Fill, RiMusic2Fill, RiPlayList2Fill, RiMicFill, RiSkipBackFill } from "react-icons/ri";


const Nav = () => {

    const navTitles = ['Profile', 'Top Artists', 'Top Tracks', 'Recent', 'Playlists']
    const navIcons = [<RiUser3Fill />, <RiMicFill />, <RiMusic2Fill />, <RiSkipBackFill />, <RiPlayList2Fill />]
    const hrefs = ['/', '/topArtists', '/topTracks', '/recentTracks', '/playlists']
    const [selectedIndex, setSelectedIndex] = useState();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const selectedIndex = hrefs.findIndex(href => href === currentPath);
        setSelectedIndex(selectedIndex);
    }, [hrefs]);

    return (
        <div className="nav">
            <div className="wrapper">
                <div className="spotify-logo"><BsSpotify className='logo spotify' /></div>
                <div className="list">
                    {
                        navTitles.map((title, index) => (
                            <a className={`${index === selectedIndex ? 'selected' : ''}`} href={hrefs[index]} key={index}>
                                <div className="bar-items" onClick={() => setSelectedIndex(index)}>
                                    <div className="information">
                                        <div className="icon">{navIcons[index]}</div>
                                        <span>{title}</span>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
                <a href='https://omar-assouma.netlify.app/'><div className="myIcon"> 👨🏻‍💻 </div></a>
            </div>
        </div>
    )
}
export default Nav