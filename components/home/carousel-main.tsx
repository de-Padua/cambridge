"use client";
import * as React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCard from "./popular/card";
import { Card } from "@/components/ui/card";
import { CardProps } from "@/types";

interface CarouselMainProps {
  cardData: CardProps[];
}

export function CarouselMain({cardData}:CarouselMainProps) {
  const [sortedArray, setSortedArray] = useState<CardProps[] | null>(null);

  const SortViews = (): void => {
    const sorted = cardData.sort((a, b) => a.views - b.views);

    const reverse = sorted.reverse();

    setSortedArray(reverse);
  };

  React.useEffect(() => {
    SortViews();
  });

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="w-full">
        {sortedArray === null
          ? "Loading.."
          : sortedArray.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                <CustomCard
                  title={card.title}
                  subtitle={card.subtitle}
                  categories={card.categories}
                  views={card.views}
                />
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
