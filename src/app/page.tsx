"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getProjects } from "../../sanity/sanity-utils";
import Project from "./components/Project";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <main className="">
      <div className="main flex flex-col items-center justify-between">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
}
