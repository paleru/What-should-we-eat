import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import CloseIcon from '@mui/icons-material/Close';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SidebarNav from './SidebarNav';

//sidebar for devices with smaller screens (screen size < 800px)
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button
            type='button'
            className='close-button'
            onClick={toggleSidebar}
          >
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
