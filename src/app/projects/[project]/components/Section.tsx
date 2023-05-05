"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
import { Project } from "../../../../../types/project";

type Props = {
  project: Project;
};

function Section({ project }: Props) {
  const { name } = project;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      const sectionWidth = sectionRef?.current?.offsetWidth;
      gsap.to(panels, {
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
  });

  return (
    <main className="w-[98vw] overflow-hidden">
      <section ref={sectionRef} className="flex w-fit text-slate-200">
        <div className="panel w-screen  flex items-center">
          {/* <h1 className="text-[32rem] md:text-[40rem] text-slate-300 whitespace-nowrap font-customFont font-bold">
            {name}
          </h1> */}
          <h3 className="te text-2xl font-customFont mb-2">{name}</h3>
        </div>
        <div className="panel bg-transparent h-screen w-screen flex items-center justify-center">
          <div className="max-w-prose">
            <h3 className="te text-2xl font-customFont mb-2">
              Project Overview
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magni quo deserunt iure veniam est! Mollitia dolores
              quis assumenda sapiente expedita natus iusto modi explicabo
              aliquam! Illo officia labore possimus.
            </p>
          </div>
        </div>
        <div className="panel h-screen w-screen flex items-center justify-center">
          <div className="max-w-prose">
            <h3 className="te text-2xl font-customFont mb-2">Check it out</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magni quo deserunt iure veniam est! Mollitia dolores
              quis assumenda sapiente expedita natus iusto modi explicabo
              aliquam! Illo officia labore possimus.
            </p>
          </div>
        </div>
      </section>
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-slate-500">view next project</p>
      </div>
    </main>
  );
}

export default Section;
