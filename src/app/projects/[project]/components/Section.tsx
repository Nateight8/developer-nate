"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { Project } from "../../../../../types/project";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

type Props = {
  project: Project;
};

function Section({ project }: Props) {
  const { name, image } = project;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const sectionWidth = sectionRef?.current?.offsetWidth;
      gsap.to(sectionRef.current, {
        xPercent: -100 * (panels.length - 1),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // markers: true,
          scrub: 1,
          pin: true,
          end: () => {
            return "+=" + sectionWidth;
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <main className="w-[98vw] overflow-hidden">
      <div className="absolute bottom-4 left-4 bg-background">
        <h1 className="text-2xl text-slate-300">{name}</h1>
      </div>
      <section
        ref={sectionRef}
        className="flex w-fit text-slate-200 relative space-x-9"
      >
        <div className="absolute z-0 ">
          <h1 className="text-[32rem] md:text-[40rem] text-slate-300 whitespace-nowrap font-customFont font-bold">
            {name}
          </h1>
        </div>
        <div className="w-screen h-screen relative z-20"></div>
        <div className="panel  z-20 bg-transparent h-screen w-screen flex items-center justify-center">
          <div className="max-w-prose shadow-2xl shadow-slate-800 ring-2 ring-slate-800 ring-offset-4 ring-offset-current ring-opacity-25 p-4 rounded-md bg-background">
            <h3 className="te text-2xl font-customFont mb-2">
              Project Overview
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magni quo deserunt iure veniam est! Mollitia dolores
              quis assumenda sapiente expedita natus iusto modi explicabo
              aliquam! Illo officia labore possimus.
            </p>
          </div>
        </div>
        <div className="panel h-screen w-screen flex items-center justify-center px-4">
          <div className="max-w-[41.875rem] shadow-2xl shadow-slate-800 w-full z-10 ring-2 ring-slate-800 ring-offset-4 rounded-md ring-offset-current ring-opacity-25">
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
          </div>
        </div>
      </section>
      <div className="bg-gray-500 h-screen w-screen"></div>
    </main>
  );
}

export default Section;
