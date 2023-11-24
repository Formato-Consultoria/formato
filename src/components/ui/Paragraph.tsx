'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion"

export function Paragraph({ children }: { children: ReactNode}) {
  return (
    <motion.p>
      {children}
    </motion.p>
  )
}