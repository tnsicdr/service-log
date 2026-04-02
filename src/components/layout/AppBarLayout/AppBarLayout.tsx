import type { ReactNode } from "react";
import { AppBar } from "../../ui/AppBar/AppBar";
import styles from "./AppBarLayout.module.css";

interface AppBarLayoutProps {
  children?: ReactNode;
}

export function AppBarLayout({ children }: Readonly<AppBarLayoutProps>) {
  return (
    <div className={styles.layoutContainer}>
      <AppBar />
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
}
