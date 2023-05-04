"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: {
    name: string;
    slug: string;
    image: string;
    dataset_text: string;
    dataset_bg: string;
  };
};

function Projects({ project }: Props) {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray(".project") as HTMLElement[];
      projects.forEach((project, index) => {
        const bgPrev = index === 0 ? "" : projects[index - 1]?.dataset.bg;
        const namePrev = index === 0 ? "" : projects[index - 1]?.dataset.name;
        console.log(namePrev);

        ScrollTrigger.create({
          trigger: project,
          start: "top 50%",

          onEnter: () => {
            gsap.to(".main", {
              background: project.dataset.bg,
              color: project.dataset.name,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.to(".main", {
              background: bgPrev,
              color: namePrev,
              overwrite: "auto",
            });
          },
        });
      });
    }, appRef);

    // return ctx.revert();
  }, []);

  const { dataset_bg, dataset_text, image, name, slug } = project;

  return (
    <>
      <div
        ref={appRef}
        data-bg={dataset_bg}
        data-name={dataset_text}
        className="project w-full overflow-hidden h-screen px-4 my-6 flex items-center justify-center relative"
      >
        <div className="absolute left-10 md:bottom-16 bottom-6 uppercase z-0">
          <h1 className="text-9xl text-slate-300 whitespace-nowrap font-customFont font-bold  ">
            {name}
          </h1>
        </div>
        <Link
          href={`/projects/${slug}`}
          className={`max-w-[41.875rem] w-full z-10 ring-2 ring-white ring-offset-4 rounded-md ring-offset-current ring-opacity-25 hover:ring-opacity-60 transition-all duration-700 hover:cursor-pointer`}
        >
          <AspectRatio ratio={16 / 9}>
            {image && (
              <Image
                src={image}
                alt=""
                fill
                className="rounded-md object-cover"
              />
            )}
          </AspectRatio>
        </Link>
      </div>
    </>
  );
}

export default Projects;
