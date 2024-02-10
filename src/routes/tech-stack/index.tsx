import { Link, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/tech-stack/")({
  component: ContactMe,
});

export default function ContactMe() {
  return (
    <>
      <Link
        to="/"
        className="fixed left-[10%] top-[10%] text-xl font-medium transition-transform hover:translate-x-2 hover:underline hover:underline-offset-2"
      >
        &lt; Go back
      </Link>
      <div className="flex min-h-screen items-center justify-center gap-32">
        <div className="text-6xl font-bold underline underline-offset-8">
          Tech-stack
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Back-end development</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                ASP.NET
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Next.js
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                NodeJS
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                SQL
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Front-end development</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                HTML
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                CSS/Tailwind
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Typescript
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Devops</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Azure
              </div>
              <div className="rounded-lg  bg-slate-800 p-4 text-center text-xl font-medium hover:bg-slate-900">
                Vercel
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
