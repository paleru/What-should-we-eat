import Wrapper from '../assets/wrappers/Sidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <h4>Yes, chef!</h4>
          </header>
          <SidebarNav isBig />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
