import { createFileRoute } from "@tanstack/react-router";
import type { MenuItem } from "../../components/ui/SideMenu/SideMenu.types";
import { ScreenWithSideMenu } from "../../components/layout/ScreenWithSideMenu/ScreenWithSideMenu";

export const Route = createFileRoute("/dashboard/")({
  component: Index,
});

const menuItems: MenuItem[] = [
  {
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
