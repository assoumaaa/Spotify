import React from 'react'
import '../sass/Login.scss'
import { BsSpotify } from "react-icons/bs";

const Login = () => {


    const LOGIN_URI =
        process.env.NODE_ENV !== 'production'
            ? 'http://localhost:8888/login'
            : 'https://spotify-analyser.herokuapp.com/login';

    return (
        <div className="login">
            <div className="container">
                <BsSpotify className='spotify-icon' />
                <a href={LOGIN_URI}><button className='spotify-login'> LOG IN TO SPOTIFY</button></a>
                <span><a>Note :</a> please email me at <a className='email'>omarassouma@hotmail.com</a> your name and your spotify email for this to work due to Spotify API limitations! </span>
            </div>
        </div>
    )
}

export default Login