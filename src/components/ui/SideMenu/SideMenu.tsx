import type { MenuItem } from "./SideMenu.types";
import styles from "./SideMenu.module.css";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

interface SideMenuProps {
  menuItems?: MenuItem[];
}

export function SideMenu({ menuItems }: Readonly<SideMenuProps>) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      data-testid="menu-container"
      data-expanded={isExpanded}
      className={styles.menuContainer}
    >
      <div className={styles.menuHeader}>
        <button
          className={styles.expandCollapseButton}
          onClick={toggleExpand}
          aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
        >
          <span className={styles.buttonText}>
            {isExpanded ? "Toggle" : ""}
          </span>
          <span className={styles.buttonIcon}>{isExpanded ? "◀" : "▶"}</span>
        </button>
      </div>

      <ul className={styles.menuList}>
        {menuItems?.map((item) => (
          <li key={item.label}>
            <Link to={item.path} className={styles.menuLink}>
              <span className={styles.menuItemText}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.menuFooter}>
        <div className={styles.userMenu}>
          <button
            className={styles.userMenuButton}
            onClick={() => console.log("User menu clicked")}
            aria-haspopup="true"
            aria-expanded="false"
            title="User Menu"
          >
            <span className={styles.menuItemText}>User Menu</span>
          </button>
        </div>
        <button
          className={styles.logoutButton}
          onClick={() => console.log("Logout clicked")}
          title="Logout"
        >
          <span className={styles.menuItemText}>Logout</span>
        </button>
      </div>
    </div>
  );
}
