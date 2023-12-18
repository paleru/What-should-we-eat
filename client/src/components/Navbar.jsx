import Wrapper from '../assets/wrappers/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useDashBoardContext } from '../pages/DashboardLayout';

const Navbar = () => {
  const { toggleSidebar } = useDashBoardContext();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <MenuIcon fontSize='large' className='menu-icon' />
        </button>
        <div>
          <h4>What should we eat?</h4>
          <LocalDiningIcon className='local-dining-icon' />
        </div>
        <div className='btn-container'>logout</div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
