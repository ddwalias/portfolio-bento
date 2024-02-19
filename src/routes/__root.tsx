import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Outlet />
      </div>
      <Analytics />
    </>
  );
}
