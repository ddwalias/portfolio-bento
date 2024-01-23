import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute('/projects/').createRoute({
  component: Projects,
});

export default function Projects() {
  return (
    <>
      <Link to="/">&lt; Go back</Link>
      <div className="flex min-h-screen items-center justify-center gap-32">
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
              <div className="text-2xl font-bold">OSIM Omnichannel E-commerce</div>
              <div className="px-2 w-fit rounded-full border-2 bg-violet-700 text-xs flex justify-center items-center">
                Work
              </div>
            </div>

            <p className="text-slate-500">Sitecore Commerce, Sitecore XP, ASP.NET, React</p>
          </a>
          <a
              href="https://www.ricoh.com/"
              target="_blank"
              className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Ricoh Website</div>
              <div className="px-2 w-fit rounded-full border-2 bg-violet-700 text-xs flex justify-center items-center">
                Work
              </div>
            </div>
            <p className="text-slate-500">Sitecore XP, ASP.NET</p>
          </a>
          <a
              href="https://virparyas.hoangduydang.dev"
              target="_blank"
              className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Virparyas Ordering App</div>
              <div className="px-2 w-fit rounded-full border-2 bg-yellow-700 text-xs flex justify-center items-center">
                Personal
              </div>
            </div>
            <p className="text-slate-500">Next.js</p>
          </a>
          <a
              href="https://github.com/Zyr0nX/discord"
              target="_blank"
              className="w-[500px] rounded-lg  bg-slate-800 p-4 hover:bg-slate-900 "
          >
            <div className="flex gap-4">
              <div className="text-2xl font-bold">Discord Clone Chat App</div>
              <div className="px-2 w-fit rounded-full border-2 bg-yellow-700 text-xs flex justify-center items-center">
                Personal
              </div>
              <div className="px-2 w-fit rounded-full border-2 bg-slate-700 text-xs flex justify-center items-center">
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
