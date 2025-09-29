import { Link, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/tech-stack/")({
  component: TechStack,
});

export default function TechStack() {
  return (
    <>
      <Link
        to="/"
        className="fixed left-4 top-4 text-xl font-medium transition-transform hover:translate-x-2 hover:underline hover:underline-offset-2 md:left-16 md:top-16"
      >
        &lt; Go back
      </Link>
      <div className="flex min-h-screen flex-col items-center justify-center gap-32 px-8 md:flex-row md:gap-16">
        <div className="text-6xl font-bold">
          Tech-stack
        </div>
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Programming Languages</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="h-fit  break-words rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                C#
              </div>
              <div className="h-fit  break-words rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Typescript
              </div>
              <div className="h-fit  break-words rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Javascript
              </div>
              <div className="h-fit  break-words rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                C++
              </div>
              <div className="h-fit  break-words rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Python
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Rust
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Web Development</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                ASP.NET MVC
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                .NET Core
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Entity Framework Core
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Dapper
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                React
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                jQuery
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                HTML
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                CSS
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Database</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                SQL Server
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                PostgreSQL
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                SQLite
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                libSQL
              </div>
              <div className="h-fit break-words  rounded-lg bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Redis
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
