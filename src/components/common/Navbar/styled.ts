import Link from "next/link";

import { colors } from "src/styles";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Container } from "../../layouts/Container";

export const NavbarContainer = styled(motion.nav)`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavbarInnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavbarLinkText = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.text};
`;
