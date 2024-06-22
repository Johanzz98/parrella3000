"use client";
import React from 'react';
import {ThemeProvider } from '@mui/material';


import { useTheme } from '@mui/material/styles';

import { Provider } from 'react-redux';
import { store } from "@/services/store"

import { AuthProvider } from '@/context/AuthProvider';

import Account from './Account';
const Page = () => {
  const theme = useTheme();

  return ( 
     
      
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <Provider store={store()}>
     <Account/>
     </Provider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Page;
