import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/sidebarItems';
import { NavLink } from 'react-router-dom';

const SidebarNav = ({ isBig }) => {
  //toggle if sidebar is open or not
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBig ? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default SidebarNav;
