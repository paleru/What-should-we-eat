import { AccountCircle, ArrowDropDown } from '@mui/icons-material';
import Wrapper from '../assets/wrappers/Logout';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type='button'
        className='button logout-button'
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt='avatar' className='img' />
        ) : (
          <AccountCircle />
        )}

        {user?.name}
        <ArrowDropDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-button' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default Logout;
