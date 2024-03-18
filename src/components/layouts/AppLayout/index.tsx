/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { BottomBox, Navbar } from "src/components/common";
import { SuspenseFallback } from "src/components/common/SuspenseFallback";
import { useCheckAppStore } from "src/store";
import { colors } from "src/styles";

import { Container } from "../Container";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { setIsLoading, isLoading } = useCheckAppStore();
  const { isApp } = useCheckAppStore();

  useEffect(() => {
    if (isApp) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, isApp]);

  return isLoading ? (
    <Container style={{ height: "calc(100vh - 9rem)", backgroundColor: colors.background }}>
      <SuspenseFallback />
    </Container>
  ) : (
    <>
      {!isApp && <Navbar />}
      {children}
      {!isApp && <BottomBox />}
    </>
  );
};
