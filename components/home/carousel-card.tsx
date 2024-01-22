import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge"
import { CardProps } from "@/types";


function CarouselCard({ title, subtitle, categories, views }: CardProps) {
  return (
    <div>
      <Card className="border-none shadow-none">
        <CardContent className="p-0 flex items-center justify-center my-2 relative ">
        <div className="flex items-center   text-xs  my-2 absolute top-0   right-1">
            <Badge className="">{views}
            <EyeOpenIcon className=" ml-1" /></Badge>
          </div>
          <Image
            src={
              "https://miblart.com/wp-content/uploads/2021/04/revelation-book-cover-684x1024.jpeg"
            }
            alt="historie image cover"
            width={350}
            height={500}
            className="aspect-[4/6] "
          />
          <div className="absolute bottom-0  w-full z-10 bg-gradient-to-t from-black via-black  text-white ">
          <CardHeader className="">
          <CardTitle className="">{title}</CardTitle>
          <div className="flex flex-col">
          <div className="line-clamp-1   space-x-1  ">
            {categories.map(cat =>{
              return <Badge variant={'secondary'}   className="text-xs">{cat.title}</Badge>

            })}
          </div>

          </div>
        </CardHeader>
       
          </div>
        </CardContent>
      
      </Card>
    </div>
  );
}

export default CustomCard;
