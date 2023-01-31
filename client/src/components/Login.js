import React from 'react'
import '../sass/Login.scss'
import { BsSpotify } from "react-icons/bs";

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <BsSpotify className='spotify-icon' />
                <a href='http://localhost:8888/login'><button className='spotify-login'> LOG IN TO SPOTIFY</button></a>
            </div>
        </div>
    )
}

export default Login