import React from "react";
import { getProjects } from "../../../../sanity/sanity-utils";

type Props = {};

async function Project({}: Props) {
  //   const slug = params.project;

  //   const project = await getProjects(slug);

  return (
    <div className="h-screen w-full bg-red-200 flex items-center justify-center">
      <h1 className="text-7xl font-customFont">Project page here</h1>
    </div>
  );
}

export default Project;
