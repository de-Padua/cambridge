"use client";
import { useState } from "react";
import React from "react";
import ImageUpload from "@/components/forms/new-book/image";
import { BookForm } from "@/components/forms/new-book/form";
import Chapterbuilder from "@/components/forms/new-book/textarea";

function page() {
  const [editorHtml, setEditorHtml] = useState("");

  const handleEditorChange = (html: any) => {
    setEditorHtml(html);
  };

  return (
    <div className="flex justify-center items-start py-20 min-h-lvh">
      <div className="w-full  flex  items-center justify-center flex-col">
      

        <div className="w-full flex items-center justify-center">
          
          <div className="mx-4   ">
            <ImageUpload />
          </div>
          <div className="w-1/4 h-full ">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
