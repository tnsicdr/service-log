import type { CSSProperties } from "react";
import styles from "./AppBar.module.css";
import clsx from "clsx";

interface AppBarProps {
  className?: string;
  style?: CSSProperties;
}

export function AppBar({ className, style }: Readonly<AppBarProps>) {
  const containerClass = clsx(styles.appBar, className);

  return (
    <header className={containerClass} style={style}>
      <div className={styles.appName}>ServiceLog</div>
    </header>
  );
}
