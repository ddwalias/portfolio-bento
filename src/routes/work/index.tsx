import { FileRoute, Link } from '@tanstack/react-router';

export const Route = new FileRoute('/work/').createRoute({
  component: Work,
});

export default function Work() {
  return (
    <>
      <Link to="/">&lt; Go back</Link>
      <div className="flex min-h-screen items-center justify-center gap-32">
        <div className="text-6xl font-bold underline underline-offset-8">
          Work & Education
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
            <div>
              <div className="text-xl font-bold">SmartOSC</div>
              <div className="text-slate-400">2020 - present</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
            <div>
              <div className="text-xl font-bold">
                Le Quy Don Technical University
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
