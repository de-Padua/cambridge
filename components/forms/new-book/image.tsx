"use client";
import React, { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

function ImageUpload() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
  
    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {

        if(e){
      const file = e.target.files[0];
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);}
    };
  return (
    <div className="grid  w-full max-w-sm items-center gap-1.5 p-4 border rounded-md ">
                <h2 className="font-bold my-2">Add a cover for you new histoy</h2>

      <label htmlFor="picture" className="border rounded-md p-2" >
        <div className="w-full h-80  flex items-center justify-center">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-contain " />
        ) : (
          <div>
            <PlusCircledIcon className="w-10 h-10" />
          </div>
        )}
        </div>
        <Input id="picture" type="file" className="border-none shadow-none" onChange={handleFileChange} />
      </label>

      <div className="py-3  ">
        
        <h2 className="text-lg font-bold text-red-600">Rember</h2>
        <p className="text-xs text-muted-foreground">
          {" "}
          Cover can be NSFW,but cannot contain any explicit human parts
        </p>
      </div>
    </div>
  );
}

export default ImageUpload;
