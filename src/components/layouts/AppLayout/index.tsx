import React, { useEffect, useState } from "react";

import { Navbar } from "src/components/common";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isApp, setIsApp] = useState(false);
  useEffect(() => {
    setIsApp(Boolean(window.isNativeApp));
    console.log("isNativeApp", Boolean(window.isNativeApp));
  }, [setIsApp]);
  return (
    <>
      {!isApp && <Navbar />}
      {children}
    </>
  );
};
