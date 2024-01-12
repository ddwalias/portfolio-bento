import { FileRoute } from "@tanstack/react-router";
import HomeMe from "../components/home-me";

export const Route = new FileRoute("/").createRoute({
  component: Home,
});

function Home() {
  return (
    <div className="grid min-h-screen w-full grid-cols-3 grid-rows-3">
      <div className=" relative col-span-2 col-start-1 row-span-2 row-start-1 cursor-pointer transition-colors duration-300 self-center h-full">
        <HomeMe />
      </div>
      <div className="col-start-2 row-start-2 hover:bg-blue-600 border-2 border-slate-200/10 relative z-10">
        <h2 className="ml-6 mt-6 text-6xl font-bold">Résume</h2>
      </div>
      <div className="col-start-3 row-start-1 hover:bg-blue-600 border-2 border-slate-200/10">
        <h2 className="ml-6 mt-6 text-6xl font-bold">Education</h2>
      </div>
      <div className="col-start-3 row-start-2 hover:bg-yellow-600 border-2 border-slate-200/10">
        <h2 className="ml-6 mt-6 text-6xl font-bold">Work</h2>
      </div>
      <div className="col-start-1 row-start-3 hover:bg-violet-600 border-2 border-slate-200/10">
        <h2 className="ml-6 mt-6 text-6xl font-bold">Projects</h2>
      </div>
      <div className="col-span-2 col-start-2 row-start-3 hover:bg-lime-600 border-2 border-slate-200/10">
        <h2 className="ml-6 mt-6 text-6xl font-bold">Tech-stack</h2>
      </div>
    </div>
  );
}
