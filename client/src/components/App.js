import React from 'react'
import Login from './Login'
import { GetToken } from '../hooks';
import Profile from './Profile';


const App = () => {
  const { token } = GetToken();


  return token !== 'undefined' ? <Profile /> : <Login />;
}

export default App