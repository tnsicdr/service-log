import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppBarLayout } from "../components/layout/AppBarLayout/AppBarLayout";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <AppBarLayout>
        <Outlet />
      </AppBarLayout>
      <TanStackRouterDevtools />
    </>
  );
}
