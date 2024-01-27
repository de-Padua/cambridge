"use client";
import TextArea from "@/components/forms/new-book/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef } from "react";

function page() {
  const chapterRef = useRef(null);

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="w-1/2 my-10 ">
        <div className="w-full my-5">
          <h2 className="text-3xl font-bold">New chapter</h2>
          <p className="text-sm text-muted-foreground">Create and publish a new chapter for your history</p>
        </div>
        <Input
          type="text"
          ref={chapterRef}
          placeholder="Chapter title"
          className="rounded-none border-neutral-400  py-2 my-2   "
        />
        <TextArea />

        <Button className="my-3 w-fit ">Publish new chapter</Button>
      </div>
    </div>
  );
}

export default page;
