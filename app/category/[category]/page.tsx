import React from "react";
import Section from "@/components/list/section";
import { UserBookProps } from "@/types";
import Card from "@/components/home/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TagsArea from "@/components/list/tags";
import { Badge } from "@/components/ui/badge";

function page({ params }: { params: { category: string } }) {
  const whimsicalJourneyBook: UserBookProps[] = [{
    title: "The Whimsical Journey of Oliver",
    author: "Your Name",
    category: { title: "Fantasy", id: "fantasy123" },
    views: 1000,
    preface: `
      <h2>The Whimsical Journey Begins</h2>
      <p>Once upon a time in the enchanting town of Meadowville, a spirited boy named Oliver embarked on a whimsical journey that would shape the destiny of the entire town.</p>
      <p>With a heart full of dreams and a mind brimming with imagination, Oliver's adventures unfolded like the pages of a magical storybook.</p>
    `,
    favorites: [
      { id: "user123", userName: "BookLover1" },
      { id: "user456", userName: "AdventureSeeker" },
    ],
    tags: [
      { title: "Adventure", id: "adventure123" },
      { title: "Magic", id: "magic456" },
    ],
    chapters: [
      {
        title: "Chapter 1: The Enchanted Beginning",
        text: `
          <p>Oliver discovered a mysterious key in the hollow of an ancient tree, unlocking a hidden door to Meadowville Library.</p>
          <p>The library held books with tales of distant realms, and Oliver's journey took an unexpected turn as he delved into the magical stories.</p>
        `,
      },
      {
        title: "Chapter 2: Moonlit Guardianship",
        text: `<p>Under the moonlit sky, Oliver became the guardian of dreams, ensuring that every star carried a wish from those who believed.</p> <p>The meadows whispered secrets, and Oliver's heart danced with the fireflies, creating a symphony of joy.</p>
        `,
      },
    ],
    sinopisis: "Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.",
    typeOfBook: 'unique',
    createdAt: new Date(),
  }]

  return (
    <div className="p-20">
      <Section>
        <>
          <div className="w-1/2 my-10">
            <h2 className="text-4xl">{params.category}</h2>
          </div>

          <div className="w-1/2 p-2">
            <TagsArea tags={whimsicalJourneyBook} />
          </div>
          <div className="grid grid-cols-5 w-1/2  ">
            {whimsicalJourneyBook.map((card) => {
              return (
                <Card
                  
                sinopisis={card.sinopisis}
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

          <div className="w-full flex items-center justify-center mt-20">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      </Section>
    </div>
  );
}

export default page;
