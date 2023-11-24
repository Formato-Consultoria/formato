'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion"

export function HeadlineH1({children}: {children: ReactNode}) {
  return (
    <motion.h1>
      {children}
    </motion.h1>
  )
}