"use client";
import Sidebar from '@/scenes/global/Sidebar';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from "@/context/AuthProvider"; // Importa el AuthProvider
import { store } from "@/services/store";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <Sidebar />
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Page;
