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
        <div className="flex flex-col">
          <a
            href="https://sg.osim.com"
            target="_blank"
            className="w-[200px] rounded-lg  bg-slate-800 p-4  hover:bg-slate-500 flex"
          >
            <div className="text-2xl font-bold">OSIM</div>
            <div className="p-1 w-fit rounded-full bg-slate-950 text-xs flex justify-center items-center">
              Work
            </div>
          </a>
          <div></div>
        </div>
      </div>
    </>
  );
}
