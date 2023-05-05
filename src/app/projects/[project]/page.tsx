"use client";
import React from "react";
import { getProject } from "../../../../sanity/sanity-utils";
import Section from "./components/Section";

type Props = {
  params: { project: string };
};

async function Page({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main className="w-[98vw] overflow-hidden">
      <Section project={project} />
    </main>
  );
}

export default Page;
