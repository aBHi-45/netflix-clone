import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        //login
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //logout
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {user === null ? (
          <LoginScreen />
        ) : (
          <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/profile" element={<ProfileScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
