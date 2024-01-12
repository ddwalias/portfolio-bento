import React from 'react'
import { motion } from "framer-motion"
import { Link } from '@tanstack/react-router';

export default function HomeMe() {
  return (
    <Link className="group grid grid-cols-2 grid-rows-2 h-full">
      <div className="col-span-2 group-hover:bg-slate-600 border-x-2 border-t-2 border-slate-200/10 relative after:w-[calc(50%+2px)] after:absolute after:right-0 after:bottom-0 after:h-0.5 after:bg-slate-200/10">
        <div className="ml-6 mt-20">
          <p className="text-lg">Hi, My name is</p>
          <h1 className="text-6xl font-bold">Hoang Duy Dang.</h1>
          <div className="h-8"></div>
          <p className="text-2xl">
            Software engineer
            <br />
            <span className="text-slate-400">Full-stack developer</span>
          </p>
        </div>
      </div>
      <div className="group-hover:bg-slate-600 border-x-2 border-b-2 border-slate-200/10 relative">
        <p className="absolute right-4 bottom-4 text-xl font-medium group-hover:-translate-x-4 transition-transform">
          About me &gt;
        </p>
      </div>
    </Link>
  );
}
