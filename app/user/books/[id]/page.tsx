"use client";
import React, { useRef } from "react";
import BookHeader from "@/components/home/header";
import { UserBookProps } from "@/types";
import { Input } from "@/components/ui/input";
import TextArea from "@/components/forms/new-book/textarea";
import { BookForm } from "@/components/forms/new-book/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaceIcon, NotionLogoIcon, PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Link from "next/link";
function page() {
  const chapterRef = useRef(null);

  const book: UserBookProps = {
    finished: false,
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
    chapters: [],
    synopisis:
      "Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town. Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.Join Oliver on a whimsical journey through meadows, libraries, and enchanted realms as he discovers the magic woven into the fabric of his town.as he discovers the magic woven into the fabric of his town.",

    typeOfBook: "unique",
    createdAt: new Date(),
  };
  return (
    <div>
      <div className="w-full flex items-start justify-center min-h-screen mt-10">
        <div className="w-1/2 py-5 space-y-5">
          <div className="w-full ">
            <h2 className="text-2xl font-bold">History manager </h2>
            <p className="text-sm text-muted-foreground">Edit your history</p>
          </div>

          <BookForm defaultData={book} />

          <div className="w-full  ">
            <div className="w-full ">
              <h2 className="text-2xl font-bold">
                Manage your history chapters
              </h2>
              <p className="text-sm text-muted-foreground">
                Create,edit,delete and update any chapters
              </p>
            </div>
            <div className="grid grid-cols-4 w-full my-3">
             {book.chapters.length === 0 ?  <Link href={"/user/books/id/chapter/new"}>
              <Card className="cursor-pointer hover:bg-slate-100 transition-all" >
                <CardHeader>
                  <CardTitle className="items-center justify-between flex w-full">
                    New chapter
                    <PlusIcon />
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Create and publish a new chapter
                  </CardDescription>
                </CardHeader>
              </Card>
             </Link> : book.chapters.map(item =>{
                return  <Card className="cursor-pointer hover:bg-slate-100 transition-all">
                <CardHeader>
                  <CardTitle className="items-center justify-between flex w-full">
                    {item.title}
                    <PlusCircledIcon className="text-muted-foreground" />{" "}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground line-clamp-3">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
              })}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default page;


