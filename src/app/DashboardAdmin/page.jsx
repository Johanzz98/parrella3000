"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Importa useSelector de react-redux
import Dash from "./Dash";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider";
import { store } from "@/services/store";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <Dash />
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Page;
