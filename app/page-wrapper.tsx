"use client";

import {  AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }: any) => (
  <>
    <AnimatePresence mode='wait' initial={true}>
      {children}
    </AnimatePresence>
  </>
);
