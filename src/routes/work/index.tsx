import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  component: Work,
});

export default function Work() {
  return (
    <>
      <Link
        to="/"
        className="fixed left-4 top-4 text-xl font-medium transition-transform hover:translate-x-2 hover:underline hover:underline-offset-2 md:left-16 md:top-16"
      >
        &lt; Go back
      </Link>
      <div className="flex min-h-screen flex-col items-center justify-center gap-32 px-8 md:flex-row md:gap-16">
        <div className="text-6xl font-bold underline underline-offset-8">
          Work & Education
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
            <div>
              <div className="text-xl font-bold">SmartOSC</div>
              <div className="text-slate-400">January 2021 - present</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
            <div>
              <div className="text-xl font-bold">
                Military Technical Academy
              </div>
              <div className="text-slate-400">2018 - 2023</div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
