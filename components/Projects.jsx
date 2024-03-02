"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { items } from "./ProjectItems";


export function Projects() {
  return (
      <div className="h-auto">
      <h1 className="text-4xl py-12 text-center font-bold md:text-5xl relative items-center">
        Projects
      </h1>
    <BentoGrid className="w-full mx-auto h-auto">
      {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          href={item.href}
          icon={item.icon}
          className={`${i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""} max-md:h-72 overflow-hidden cursor-pointer h-auto`}
        />
        ))}
        </BentoGrid>
      </div>
  );
}

