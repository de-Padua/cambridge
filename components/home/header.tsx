"use client";
import { Badge } from "@/components/ui/badge";
import { UserBookProps } from "@/types";
import { Button } from "@/components/ui/button";

import {
  BookmarkFilledIcon,
  CalendarIcon,
  CardStackMinusIcon,
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
import Image from "next/image";

function BookHeader({ book }: { book: UserBookProps }) {
  const [totalReadingTime, setTotalReadingTime] = useState<number | null>(null);

  function calculateReadingTime(text: string, wordsPerMinute = 100) {
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  }

  useEffect(() => {
    let total = 0;
    book.chapters.map((item) => {
      const data = calculateReadingTime(item.text);
      total = total + data;
    });
    setTotalReadingTime(total);
  }, []);

  return (
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
        <p className="text-sm px-1 ">{book.synopisis}</p>

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
            <Badge className="bg-white" variant={"outline"}>
              {book.finished ? "Complete" : "Incomplete"}
              <CardStackMinusIcon className=" ml-1" />
            </Badge>
          </div>
          <div className="">
            <Badge className="bg-white" variant={"outline"}>
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
          {book.tags.map((item) => {
            return <Badge className="mr-1">{item.title}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
}

export default BookHeader;
