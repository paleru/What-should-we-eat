import Wrapper from '../assets/wrappers/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logout from './Logout';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-button' onClick={toggleSidebar}>
          <MenuIcon className='menu-icon' />
        </button>
        <div>
          <h4>What should we eat?</h4>
          <LocalDiningIcon className='local-dining-icon' />
        </div>
        <div className='button-container'>
          <Logout />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
