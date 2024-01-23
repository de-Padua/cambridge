import React from "react";
import { CarouselMain } from "./carousel";
import { UserBookProps } from "@/types";

interface seciontProps {
  array: UserBookProps[];
  section_title: string;
}

function Section({ array, section_title }: seciontProps) {
  return (
    <section>
      <div className="flex items-center justify-start space-x-2 p-2">
        <h2 className="text-2xl font-semibold">{section_title}</h2>
      </div>
      <CarouselMain cardData={array} />
    </section>
  );
}

export default Section;
