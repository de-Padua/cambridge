"use client";
import { useState } from "react";
import React from "react";
import ImageUpload from "@/components/forms/new-book/image";
import { BookForm } from "@/components/forms/new-book/form";
import ReactQuill from "react-quill"; // Import ReactQuill component
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function TextArea() {
  const [editorHtml, setEditorHtml] = useState("");



  const handleEditorChange = (html: any) => {
    setEditorHtml(html);
  };

  return (
    <div className="">
      {" "}
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
        className="h-full"
      />
    </div>
  );
}

export default TextArea;
