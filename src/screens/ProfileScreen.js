import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logOut = (auth) => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/');
    return;
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              {/* <h3>Plans</h3> */}
              <button
                onClick={() => logOut(auth)}
                className="profileScreen_signout"
                type="submit"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
