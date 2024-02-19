import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Analytics } from "@vercel/analytics/react";


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Outlet />
        <TanStackRouterDevtools />
        <Analytics />
      </div>
    </>
  );
}
