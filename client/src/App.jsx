import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  //WhatToCook,
  FindRecipe,
  Profile,
  AddRecipe,
  Admin,
  EditRecipe,
} from './pages';

//import actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addRecipeAction } from './pages/AddRecipe';
import { loader as dashboardLoader } from './pages/DashboardLayout';
//import { loader as WhatToCookLoader } from './pages/WhatToCook';
import { loader as findRecipeLoader } from './pages/FindRecipe';
import { loader as editRecipeLoader } from './pages/EditRecipe';
import { action as editRecipeAction } from './pages/EditRecipe';
import { action as deleteRecipeAction } from './pages/DeleteRecipe';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          /* TODO create and make this index
          {
            index: true,
            element: <WhatToCook />,
            loader: WhatToCookLoader,
          }, */
          {
            index: true,
            path: 'recipes',
            element: <FindRecipe />,
            loader: findRecipeLoader,
          },
          {
            path: 'add-recipe',
            element: <AddRecipe />,
            action: addRecipeAction,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-recipe/:id',
            element: <EditRecipe />,
            action: editRecipeAction,
            loader: editRecipeLoader,
          },
          { path: 'delete-recipe/:id', action: deleteRecipeAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
