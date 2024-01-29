import React from "react";
import { CarouselMain } from "@/components/home/carousel";
import { HeartIcon, StarIcon, UpdateIcon } from "@radix-ui/react-icons";
import { UserBookProps } from "@/types";
import Section from "@/components/home/section";




function page() {
  const whimsicalJourneyBook: UserBookProps[] = [{
    finished:false,
    bookCoverUrl:"",
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
    synopisis: "Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.",
    typeOfBook: 'unique',
    createdAt: new Date(),
  }]
  
  
  
  
  
  return (
    <div className="flex items-start justify-center w-full p-20 flex-col space-y-5 ">
      <Section array={whimsicalJourneyBook} section_title={"Week trending"} />


    </div>
  );
}

export default page;
