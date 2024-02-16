import { useLoaderData, redirect } from 'react-router-dom';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

//prevent ordinary users from accessing this page
export const loader = async () => {
  try {
    const response = await baseAxiosFetch.get('/users/admin/statistics');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard/recipes');
  }
};

const Admin = () => {
  const { users, recipes } = useLoaderData();

  return (
    //number of users and recipes in db
    <Wrapper>
      <StatItem title='current users' count={users} icon={<PeopleAltIcon />} />
      <StatItem
        title='total recipes'
        count={recipes}
        icon={<LocalDiningIcon />}
      />
    </Wrapper>
  );
};
export default Admin;
