import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Sidebar, Navbar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import baseAxiosFetch from '../utils/baseAxiosFetch';

export const loader = async () => {
  try {
    const { data } = await baseAxiosFetch.get('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await baseAxiosFetch.get('/auth/logout');
    toast.success('Logged out successfully');
  };

  return (
    <DashboardContext.Provider
      //context data passed to children
      value={{ user, showSidebar, toggleSidebar, logoutUser }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              {/* outlet is where the children of the dashboard layout will be rendered */}
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
