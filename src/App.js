import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // This is for persistent login (i.e. doesn't make user null on reloading webpage)
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{

      if(userAuth){
        // User is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        // User is logged out
        dispatch(logout)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (
        <Login />
       ) : (
        <div className='app__body'>
          <Sidebar/>
          <Feed />
          <Widgets />
        </div>
       )
      } 
    </div>
  );
}

export default App;
