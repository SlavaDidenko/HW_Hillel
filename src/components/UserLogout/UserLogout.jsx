import React from 'react';
import useToggle from 'hooks/useToggle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UserLogout.scss';
const UserLogout = () => {
  const { isOpen, toggle, close } = useToggle();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const logoutStyles = ['wrapper__logout-btn'];

  if (isOpen) {
    logoutStyles.push('active');
  }

  const logout = () => {
    dispatch({ type: 'LOGGED_IN', payload: false });
    localStorage.removeItem('sign');
    navigate('/sign-in');
  };

  return (
    <div className="logout-wrapper">
      {isOpen && <div onClick={close} className='close'></div>}
      <button onClick={toggle} className="user">
        {user.login}
      </button>
      <div className={logoutStyles.join(' ')}>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserLogout;
