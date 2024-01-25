"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ClockIcon, EnterIcon, EyeOpenIcon, StarIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { UserBookProps } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

function CarouselCard({
  title,
  author,
  preface,
  category,
  views,
  tags,
  favorites,
  sinopisis
}: UserBookProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Card
        className="border-none shadow-none cursor-pointer hover:bg-accent transition-all rounded-sm p-2 "
        onClick={() => {
          setOpen((oldValue) => !oldValue);
        }}
      >
        <CardContent className="p-0 flex items-center justify-center my-2 relative h-full ">
          <div className="flex items-center   text-xs  my-2 absolute top-0   right-1">
            <Badge className="">
              {views}
              <EyeOpenIcon className=" ml-1" />
            </Badge>
          </div>
          <Image
            src={
              "http://www.casualoptimist.com/wp-content/uploads/2022/03/dolariad-design-luke-bird-978x1500.jpg"
            }
            alt="historie image cover"
            width={350}
            height={300}
            className="aspect-[2/3] "
          />
        </CardContent>

        <CardHeader className="p-0 pt-1">
          <CardTitle className="">{title}</CardTitle>
          <div className="flex flex-col">
            <div className="line-clamp-1   space-x-1  ">
              <Badge className="text-xs">{category.title}</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-9/12  p-8">
          <div className="w-full relative  flex justify-between items-center p-2">
            <div
              className="w-2/6 h-full flex justify-center items-center
               "
            >
              <Image
                src={
                  "http://www.casualoptimist.com/wp-content/uploads/2022/03/dolariad-design-luke-bird-978x1500.jpg"
                }
                alt="historie image cover"
                width={350}
                height={390}
                className="aspect-[2/3] object-cover"
              />
            </div>
            <div className="w-8/12 h-full space-y-5 p-10   ">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-semibold">{title} </h2>
                 <div className="flex items-center justify-center space-x-2">
                 <div className="">
                    <Badge className="">
                      {favorites.length}
                      <StarIcon className=" ml-1" />
                    </Badge>
                  </div>
                  <div className="f">
                    <Badge className="">
                      {}
                      <EyeOpenIcon className=" ml-1" />
                    </Badge>
                  </div>
                 </div>
                </div>
                <p className="text-sm text-muted-foreground">By {author}</p>
              </div>

              <div className="space-x-2">
              </div>
              <div className=" flex flex-wrap ">
                {tags.map((tag) => {
                  return (
                    <div className="space-x-2 mr-1">
                      <Badge variant={'secondary'}>{tag.title}</Badge>
                    </div>
                  );
                })}
              </div>
              <div>
                <ScrollArea className="h-[340px] shadow-sm w-full rounded-md py-5 
                 ">
                  <p className="text-sm">{sinopisis}</p>
                </ScrollArea>
              </div>
              <div className="flex items-center justify-start justify-self-end">
                <Link href={`/book/${title}`}>
                <Button className="mr-1">
                  <EnterIcon className="mr-2" /> Read history
                </Button>{" "}
                </Link>
              
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CarouselCard;
