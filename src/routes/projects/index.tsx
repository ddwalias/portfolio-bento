import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: Projects,
});

export default function Projects() {
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
          Projects
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://sg.osim.com"
            target="_blank"
            className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">
                OSIM Omnichannel E-commerce
              </div>
              <div className="flex w-fit items-center justify-center rounded-full border-2 bg-violet-700 px-2 text-xs">
                Work
              </div>
            </div>

            <p className="text-slate-500">
              Sitecore Commerce, Sitecore XP, ASP.NET, React
            </p>
          </a>
          <a
            href="https://www.ricoh.com/"
            target="_blank"
            className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Ricoh Website</div>
              <div className="flex w-fit items-center justify-center rounded-full border-2 bg-violet-700 px-2 text-xs">
                Work
              </div>
            </div>
            <p className="text-slate-500">Sitecore XP, ASP.NET</p>
          </a>
          {/* <a
            href="https://virparyas.hoangduydang.dev"
            target="_blank"
            className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Virparyas Ordering App</div>
              <div className="flex w-fit items-center justify-center rounded-full border-2 bg-yellow-700 px-2 text-xs">
                Personal
              </div>
            </div>
            <p className="text-slate-500">Next.js</p>
          </a> */}
          <a
            href="https://github.com/Zyr0nX/discord"
            target="_blank"
            className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Discord Clone Chat App</div>
              <div className="flex w-fit items-center justify-center rounded-full border-2 bg-yellow-700 px-2 text-xs">
                Personal
              </div>
              <div className="flex w-fit items-center justify-center rounded-full border-2 bg-slate-700 px-2 text-xs">
                WIP
              </div>
            </div>
            <p className="text-slate-500">React, ASP.NET Core</p>
          </a>
        </div>
      </div>
    </>
  );
}
