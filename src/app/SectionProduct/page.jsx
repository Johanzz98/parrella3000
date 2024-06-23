"use client";
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { store } from '@/services/store';
import { AuthProvider } from '@/context/AuthProvider';
import PageCompleta from './pageCompleta';



const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#212121',
    },
  },
});

const Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store()}>
        <AuthProvider>
    <PageCompleta/>
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Page;
