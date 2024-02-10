import { Link, createFileRoute } from "@tanstack/react-router";
import HomeMe from "../components/home-me";
import HomeResume from "../components/home-resume";
import HomeWorkAndEducation from "../components/home-work-and-education";
import HomeProjects from "../components/home-projects";
import HomeTechstack from "../components/home-techstack";
import Resume from "../assets/duy-dang-resume.pdf";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="grid min-h-screen w-full grid-cols-3 grid-rows-3">
      <Link
        to="/contact-me"
        className="relative col-span-2 col-start-1 row-span-2 row-start-1 h-full border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 before:absolute before:bottom-1/2 before:right-0 before:h-0.5 before:w-[calc(50%+2px)] before:bg-slate-200/10 after:absolute after:bottom-0 after:right-1/2 after:h-1/2 after:w-0.5 after:bg-slate-200/10 hover:bg-rose-600"
      >
        <HomeMe />
      </Link>
      <a
        href={Resume}
        download
        className="z-10 col-start-2 row-start-2 border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-blue-600"
      >
        <HomeResume />
      </a>
      <Link
        to="/work"
        className="col-start-3 row-span-2 row-start-1 border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-amber-600"
      >
        <HomeWorkAndEducation />
      </Link>
      <Link
        to="/projects"
        className="col-start-1 row-start-3 border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-purple-600"
      >
        <HomeProjects />
      </Link>
      <Link
        to="/tech-stack"
        className="col-span-2 col-start-2 row-start-3 border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-lime-600"
      >
        <HomeTechstack />
      </Link>
    </div>
  );
}
