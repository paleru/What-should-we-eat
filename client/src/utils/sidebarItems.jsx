import React from 'react';

import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const links = [
  {
    text: 'find recipe',
    path: '.',
    icon: <DinnerDiningIcon fontSize='large' />,
  },
  {
    text: 'add recipe',
    path: 'add-recipe',
    icon: <AddCircleIcon fontSize='large' />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <AccountCircleIcon fontSize='large' />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <AdminPanelSettingsIcon fontSize='large' />,
  },
];

export default links;
