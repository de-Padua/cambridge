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
import CustomCard from "./card";
import { Card } from "@/components/ui/card";
import { UserBookProps } from "@/types";

interface CarouselMainProps {
  cardData: UserBookProps[];
}

export function CarouselMain({cardData}:CarouselMainProps) {
  const [sortedArray, setSortedArray] = useState<UserBookProps[] | null>(null);

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
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/2 w-full">
                <CustomCard
                bookCoverUrl={card.bookCoverUrl}
                finished={card.finished}
                 synopisis={card.synopisis}
                 chapters={card.chapters}
                 typeOfBook={card.typeOfBook}
                 createdAt={card.createdAt}
                  tags={card.tags}
                  favorites={card.favorites}
                  author={card.author}
                  preface={card.preface}
                  title={card.title}
                  category={card.category}
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
