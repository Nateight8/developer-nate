import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
type Props = {
  project: {
    name: string;
    image: string;
  };
};

function Project({ project }: Props) {
  const { name, image } = project;
  return (
    <div className="w-full overflow-hidden h-screen px-4 my-6 flex items-center justify-center relative">
      <div className="absolute left-10 md:bottom-16 bottom-6 uppercase">
        <h1 className="text-9xl whitespace-nowrap font-customFont font-bold text-slate-300 ">
          {name}
        </h1>
      </div>

      <div className="max-w-[41.875rem] w-full ring-2 ring-white ring-offset-4 rounded-md ring-offset-current ring-opacity-25 hover:ring-opacity-60 hover:cursor-pointer ">
        <AspectRatio ratio={16 / 9}>
          <Image src="/1.jpg" alt="" fill className="rounded-md object-cover" />
        </AspectRatio>
      </div>
    </div>
  );
}

export default Project;
