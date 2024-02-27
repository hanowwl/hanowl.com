import React, { useEffect } from "react";

import { BottomBox, Navbar } from "src/components/common";
import { useCheckAppStore } from "src/store";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { setIsApp, isApp } = useCheckAppStore();

  useEffect(() => {
    if (window) {
      setIsApp(Boolean(window.isNativeApp));
    } else {
      setIsApp(false);
    }
  }, [setIsApp]);

  return (
    <>
      {!isApp && <Navbar />}
      {children}
      {!isApp && <BottomBox />}
    </>
  );
};
