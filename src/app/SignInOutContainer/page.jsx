"use client";
import React, { useEffect, useState } from "react";

import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/context/AuthProvider";
import { store } from "@/services/store";
import SignInOutContainer from "./SignInOutContainer";

const Page = () => {
  return (
    <ReduxProvider store={store()}>
      <AuthProvider>
        <SignInOutContainer />
      </AuthProvider>
    </ReduxProvider>
  );
};

export default Page;
