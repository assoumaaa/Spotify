import React from 'react'
import Login from './Login'
import { GetToken } from '../hooks';
import Profile from './Profile';


const App = () => {
  const { token } = GetToken();

  if (!token || token === 'undefined') {
    return <Login />;
  }

  return <Profile />;
}

export default App