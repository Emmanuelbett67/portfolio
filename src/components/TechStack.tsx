import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "JavaScript",
      src: "/images/logos/JavaScript-logo.png",

      className: "h-10 w-14",
    },
    {
      title: "Vue.js",
      src: "/images/logos/vue-js.png",

      className: "h-10 w-14",
    },
    {
      title: "TypeScript",
      src: "/images/logos/TypeScript-logo.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-14",
    },
    {
      title: "Tailwind CSS",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-14",
    },
    {
      title: "PHP",
      src: "/images/logos/php.png",

      className: "h-10 w-14",
    },
    {
      title: "Laravel",
      src: "/images/logos/laravel-logo.png",

      className: "h-10 w-14",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-14",
    },
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
    {
      title: "Tableau",
      src: "/images/logos/tableau.webp",

      className: "h-10 w-14",
    },
    {
      title: "Power BI",
      src: "/images/logos/power-bi.png",

      className: "h-10 w-14",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

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
