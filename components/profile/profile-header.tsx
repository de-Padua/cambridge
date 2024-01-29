"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CalendarIcon, Link1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface HeaderProps {
  photoUrl: string;
  username: string;
  joined: Date;
  bio: string;
  url: string;
}

function ProfileHeader({ headerInfo }: { headerInfo: HeaderProps }) {
  return (
    <div className="w-1/2 flex items-center justify-center ">
      <div className="flex items-start flex-col justify-start space-y-2  rounded-md">
        <div className="w-full flex items-center justify-start my-4  ">
          <Avatar className="w-fit">
            <AvatarImage
              className=" h-32 rounded-full"
              src={headerInfo.photoUrl}
            />
            <AvatarFallback>{headerInfo.username[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className=" w-full my-10 space-y-2 ">
          <h2 className="font-semibold text-2xl ">{headerInfo.username}</h2>
          <p className="text-sm text-muted-foreground">{headerInfo.bio}</p>

          <div className="flex items-center justify-start h-8">
            <Button
              variant={"link"}
              className=" mr-2 text-muted-foreground  p-0 text-xs flex items-center justify-start "
            >
              <Link1Icon className="mr-2" />
              {headerInfo.url}
            </Button>
            <Separator orientation="vertical" className="mx-2" />
            <p className="text-xs text-muted-foreground flex items-center  justify-start">
              <CalendarIcon className="mr-2" /> Joined{" "}
              {headerInfo.joined.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
