"use client";

import {  AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: any) => (
  <>
    <AnimatePresence>{children}</AnimatePresence>
  </>
);
