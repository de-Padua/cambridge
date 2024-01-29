"use client";
import { UserBookProps } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import CarouselCard from "../home/card";

function HistoriesRoll({ books }: { books: UserBookProps[] }) {
  return (
    <div className="w-full grid grid-cols-5 ">
      {books.map((card) => {
        return (
          <CarouselCard 
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
        );
      })}
    </div>
  );
}

export default HistoriesRoll;
