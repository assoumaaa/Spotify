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
            </div>
        </div>
    )
}

export default Login