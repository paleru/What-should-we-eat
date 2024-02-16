import { toast } from 'react-toastify';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { redirect } from 'react-router-dom';

export const action = async ({ params }) => {
  try {
    await baseAxiosFetch.delete(`/recipes/${params.id}`);
    toast.success('Recipe successfully deleted');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/recipes');
};
