import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashBoardContext } from '../pages/DashboardLayout';
import CloseIcon from '@mui/icons-material/Close';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SidebarNav from './SidebarNav';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashBoardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <CloseIcon fontSize='large' />
          </button>
          <header>
            <LocalDiningIcon />
          </header>
          <SidebarNav />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
