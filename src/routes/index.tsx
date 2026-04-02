import { createFileRoute } from "@tanstack/react-router";
import { ScreenWithSideMenu } from "../components/layout/ScreenWithSideMenu/ScreenWithSideMenu";
import type { MenuItem } from "../components/ui/SideMenu/SideMenu.types";
import { HouseLineIcon, SlidersHorizontalIcon } from "@phosphor-icons/react";

export const Route = createFileRoute("/")({
  component: Index,
});

const menuItems: MenuItem[] = [
  {
    icon: HouseLineIcon,
    label: "home",
    path: "/",
  },
  {
    label: "dashboard",
    path: "/dashboard",
  },
  {
    label: "reports",
    path: "/reports",
  },
  {
    icon: SlidersHorizontalIcon,
    label: "settings",
    path: "/settings",
  },
];

function Index() {
  return (
    <ScreenWithSideMenu menuItems={menuItems}>
      <div>Hello, world</div>
    </ScreenWithSideMenu>
  );
}
