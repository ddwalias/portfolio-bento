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
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-3 md:grid-rows-3">
      <a
        href="mailto:hddang219@gmail.com"
        className="relative h-full border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 before:absolute before:bottom-1/2 before:right-0 before:hidden before:h-0.5 before:w-[calc(50%+2px)] before:bg-slate-200/10 after:absolute after:bottom-0 after:right-1/2 after:hidden after:h-1/2 after:w-0.5 after:bg-slate-200/10 hover:bg-rose-600 md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 md:before:block md:after:block"
      >
        <HomeMe />
      </a>
      <a
        href={Resume}
        download
        className="border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-blue-600 md:z-10 md:col-start-2 md:row-start-2"
      >
        <HomeResume />
      </a>
      <Link
        to="/work"
        className="border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-amber-600 md:col-start-3 md:row-span-2 md:row-start-1"
      >
        <HomeWorkAndEducation />
      </Link>
      <Link
        to="/projects"
        className="border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-purple-600 md:col-start-1 md:row-start-3"
      >
        <HomeProjects />
      </Link>
      <Link
        to="/tech-stack"
        className="border-2 border-slate-200/10 bg-slate-950 transition-colors duration-300 hover:bg-lime-600 md:col-span-2 md:col-start-2 md:row-start-3"
      >
        <HomeTechstack />
      </Link>
    </div>
  );
}
