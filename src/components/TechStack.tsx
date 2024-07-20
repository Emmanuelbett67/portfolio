import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Excel",
      src: "/images/logos/exel.png",

      className: "h-10 w-14",
    },
    {
      title: "Matplotlib",
      src: "/images/logos/matplotlib.png",

      className: "h-10 w-14",
    },
    {
      title: "Python",
      src: "/images/logos/python.jpg",

      className: "h-10 w-14",
    },
    {
      title: "Pandas",
      src: "/images/logos/pandas.jpg",

      className: "h-10 w-12",
    },
    {
      title: "Seaborn",
      src: "/images/logos/seaborn.png",

      className: "h-10 w-14",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
