import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Sidebar, Navbar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout');
  };

  return (
    <DashboardContext.Provider
      value={{ user, showSidebar, toggleSidebar, logoutUser }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashBoardContext = () => useContext(DashboardContext);
export default DashboardLayout;
