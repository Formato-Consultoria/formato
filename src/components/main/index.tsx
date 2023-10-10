'use client';
import styles from "./main.module.scss";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import cx from "clsx";

export function Main({ children }: { children: ReactNode }) {
  const currentPathname = usePathname();

  return (
    <main className={cx(styles.main, currentPathname === "/" && styles.home_page)}> 
      {children}
    </main>
  )
}