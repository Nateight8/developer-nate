"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjects } from "../../sanity/sanity-utils";
import Project from "./components/Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex flex-col items-center justify-between">
      {projects.map((project) => {
        return <Project key={project._id} project={project} />;
      })}
    </main>
  );
}
