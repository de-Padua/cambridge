"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserBookProps } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BookmarkFilledIcon,
  CalendarIcon,
  EyeOpenIcon,
  LockOpen1Icon,
  StarIcon,
  TrackNextIcon,
} from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";

function page({ params }: { params: { bookparam: string } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalReadingTime, setTotalReadingTime] = useState<number | null>(null);

  const book: UserBookProps = {
    title: "The Whimsical Journey",
    author: "Antônio de Pádua da Silva Alves.",
    category: { title: "Fantasy", id: "fantasy123" },
    views: 4120,
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
      { title: "love", id: "adventure123" },
    ],
    chapters: [
      {
        title: " The Enchanted Beginning",
        text: `
              <p>Oliver discovered a mysterious key in the hollow of an ancient tree, unlocking a hidden door to Meadowville Library.</p>
              <p>The library held books with tales of distant realms, and Oliver's journey took an unexpected turn as he delved into the magical stories.</p>
            `,
      },
      {
        title: " Moonlit Guardianship",
        text: `<p>Under the moonlit sky, Oliver became the guardian of dreams, ensuring that every star carried a wish from those who believed.</p> <p>The meadows whispered secrets, and Oliver's heart danced with the fireflies, creating a symphony of joy.</p>
            `,
      },
      {
        title: " The Enigmatic Forest",
        text: `
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>
        <p>Beyond the outskirts of Meadowville, a mysterious forest known as Eldertree Woods beckoned Oliver with its enchanting whispers. Intrigued by the tales told by the townsfolk, he embarked on a daring expedition to explore its depths.</p>
        <p>The forest, bathed in the golden hues of dawn, greeted Oliver with towering ancient trees that seemed to touch the sky. Shafts of sunlight filtered through the dense canopy, casting an ethereal glow on the moss-covered ground.</p>
        <p>As Oliver ventured deeper, he discovered a hidden glade where magical creatures congregated. Luminescent butterflies danced in the air, and wise old owls observed from their perches in the ancient branches.</p>
        <p>A babbling brook meandered through the heart of the forest, its crystalline waters reflecting the vibrant colors of the surrounding flora. Mystical flowers bloomed, releasing fragrances that transported Oliver to realms beyond imagination.</p>
        <p>Curiosity led him to an ancient tree at the heart of the forest, known as the Eldertree. Legends spoke of its wisdom and the ability to reveal glimpses of the past and future. With bated breath, Oliver approached the majestic tree.</p>
        <br>

        <p>The Eldertree, with bark as old as time itself, whispered secrets only the wind could carry. Oliver listened intently, learning about the ebb and flow of the natural world and the interconnectedness of all living things.</p>
        <p>As the sun dipped below the horizon, Eldertree Woods revealed its nocturnal wonders. Fireflies illuminated the forest like a celestial ballet, and the nocturnal creatures emerged, filling the air with a symphony of chirps and rustles.</p>
        <p>Oliver, entranced by the mystical aura of Eldertree Woods, realized that every step in the forest unveiled a new chapter in the ongoing tale of nature's wonders. With newfound wisdom and a heart brimming with gratitude, he retraced his steps, leaving the enigmatic forest with a treasure trove of memories.</p>
        <p>And so, under the vast expanse of starlit skies, Oliver returned to Meadowville, forever changed by the mysteries he had unraveled in the heart of the Eldertree Woods.</p>
      `,
      },
      {
        title: " The Quest for Celestial Harmony",
        text: `
          <p>News arrived in Meadowville of a celestial event that would unfold once in a lifetime—the alignment of the three moons. Legends spoke of a hidden celestial portal that would appear during this cosmic convergence, granting those who found it a glimpse into realms beyond the mortal plane.</p>
          <p>With the townsfolk buzzing with excitement, Oliver felt a stirring within him. An ancient prophecy whispered of a chosen one who, under the triple moonlight, would embark on a quest to unlock the secrets of celestial harmony.</p>
          <p>Guided by the luminous glow of the moons, Oliver set out on a quest that would take him to the highest peaks and the deepest caverns. His journey led him through meadows bathed in moonlight, where ethereal flowers bloomed, releasing melodies that echoed through the night.</p>
          <p>As he traversed mystical landscapes, Oliver encountered challenges that tested his resolve. He crossed ancient bridges suspended between clouds, navigated through moonlit labyrinths, and sought counsel from wise celestial beings who dwelled in the realms between worlds.</p>
          <p>The celestial alignment drew nearer, and Oliver could feel the energy building in the air. Guided by the whispers of the moons, he reached the summit of the Celestial Peak, a towering mountain that touched the skies.</p>
          <p>Beneath the triple moonlight, a portal shimmered into existence, revealing a breathtaking tapestry of cosmic wonders. Stars formed constellations that told tales of heroes and mythical creatures, and planets danced in a celestial ballet.</p>
          <p>With a heart brimming with gratitude, Oliver gazed into the portal, witnessing the beauty of the cosmos. As the moons slowly drifted apart, the portal closed, leaving Meadowville bathed in the gentle glow of the night sky.</p>
          <p>Though his quest had come to an end, the celestial harmony lingered in Oliver's heart. Meadows, forests, and celestial wonders had become chapters in the grand story of his whimsical journey, each page filled with the magic of discovery.</p>
          <p>And so, with the knowledge of celestial realms and the joy of newfound wisdom, Oliver returned to Meadowville, his heart forever tuned to the harmonies of the cosmos.</p>
        `,
      },
    ],
    sinopisis:
      "Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.",
    typeOfBook: "unique",
    createdAt: new Date(),
  };

  // Restore scroll position on page load
  useEffect(() => {
    window.addEventListener("scroll", () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    });

    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  useEffect(() => {
    let total = 0;
    book.chapters.map((item) => {
      const data = calculateReadingTime(item.text);
      total = total + data;
    });
    setTotalReadingTime(total);
  }, []);

  function calculateReadingTime(text: string, wordsPerMinute = 100) {
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  }

  return (
    <div className="w-full h-full flex items-start justify-center  ">
      <div className="w-full  h-full flex justify-center items-center flex-col ">
        <div className="w-full h-full flex justify-center items-center border-b bg-accent py-20 ">
          <div className=" mx-6 h-full flex items-center justify-center ">
          <Image
                src={
                  "http://www.casualoptimist.com/wp-content/uploads/2022/03/dolariad-design-luke-bird-978x1500.jpg"
                }
                alt="historie image cover"
                width={160}
                height={100}
                className=" "
              />
          </div>
          <div className="w-1/2  justify-self-start h-full flex items-start justify-center flex-col ">
          
            <h2 className="text-5xl font-semibold py-2">{book.title}</h2>
            <p className="text-sm ">{book.sinopisis}</p>

            <div className="flex items-center justify-start space-x-2">
              
              <HoverCard>
                <HoverCardTrigger asChild className="p-0 py-1 mt-1">
                  <Button
                    variant="link"
                    className="py-1 textsnm
        "
                  >
                    {book.author}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar className="w-1/3">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/106854024?v=4" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{book.author}</h4>
                      <p className="text-sm">I do histories</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <div className="">
                <Badge className="bg-white"variant={"outline"}>
                  {book.typeOfBook}
                  <EyeOpenIcon className=" ml-1" />
                </Badge>
              </div>
              <div className="">
                <Badge className="bg-white"variant={"outline"}>
                  {book.views}
                  <EyeOpenIcon className=" ml-1" />
                </Badge>
              </div>
              <div className="">
                <Badge className="bg-white" variant={"outline"}>
                  {book.favorites.length}
                  <StarIcon className=" ml-1" />
                </Badge>
              </div>
              <div className="">
                <Badge className="bg-white" variant={"outline"}>
                  {book.category.title}
                  <BookmarkFilledIcon className=" ml-1" />
                </Badge>
              </div>
              <div>
                {totalReadingTime === null ? (
                  "..."
                ) : (
                  <p className="text-sm mt-1">{totalReadingTime} min read. </p>
                )}
              </div>
            </div>
            <div>
              {book.tags.map(item =>{
                return <Badge className="mr-1">{item.title}</Badge>
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 my-5">
          <div className="h-fit  min-h-screen">
            <div className="my-5">
            <h1 className=" text-3xl font-semibold my-2 ">
                Chapter {currentIndex + 1}
              </h1>
              <h4 className=" text-2xl font-semibold">
                {book.chapters[currentIndex].title}
              </h4>

              <p className="text-sm">
                {calculateReadingTime(book.chapters[currentIndex].text)} min
                read.
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: book.chapters[currentIndex].text,
              }}
              className="   text-sm"
            ></div>
            <div className="w-full my-10 flex justify-between">
              {currentIndex > 0 ? (
                <Button
                  onClick={() => {
                    setCurrentIndex((oldvalue) => oldvalue - 1);
                  }}
                >
                  Read previous chapter
                  
                </Button>
              ) : <>.</>}
              {
                currentIndex === book.chapters.length - 1
                 ? "" :  <Button
                onClick={() => {
                  setCurrentIndex((oldvalue) => oldvalue + 1);
                }}
              >
                Read next chapter
              </Button>
              }
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full sticky top-10">
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

export default page;
