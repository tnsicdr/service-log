import type { JSX, ReactNode } from "react";
import type { MenuItem } from "../../ui/SideMenu/SideMenu.types";
import { SideMenu } from "../../ui/SideMenu/SideMenu";
import styles from "./ScreenWithSideMenu.module.css";

interface ScreenWithSideMenuProps {
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export function ScreenWithSideMenu({
  children,
  menuItems,
}: Readonly<ScreenWithSideMenuProps>): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <SideMenu menuItems={menuItems} />
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}
