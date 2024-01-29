"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import { SelectContent } from "@radix-ui/react-select";
import { CameraIcon, DotIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email(),
  bio: z.string().max(300, { message: "300 characters max" }),
  urls: z.object({
    value: z.string().url({ message: "Please enter a valid URL." }),
  }),
});

const user: User = {
  username: "John Doe",
  email: "john@example.com",
  photoUrl: "https://avatars.githubusercontent.com/u/106854024?v=4",
  id: "11",
  books: [],
  favorites: [],
  bio: "I am a passionate writer who loves to explore various genres.",
  joined: new Date("2022-01-01"),
  urls: { value: "https://shadcn.com" },
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/forms/new-book/image";
import { Label } from "@/components/ui/label";
import { File } from "buffer";

export default function page() {
  const [imagePreview, setImagePreview] = useState<string | null>(
    user.photoUrl
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user.username,
      bio: user.bio,
      urls: user.urls.value,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handlePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="my-10 w-1/2">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings.
            </p>
          </div>

          <Separator className="my-6 " />
          <div className="  w-full my-2">
            <Label>
              Profile picture
              {imagePreview && (
                <Avatar className="w-40 h-40 my-2 border shadow-sm relative flex items-center justify-center">
                <AvatarImage src={imagePreview} className="w-full cursor-pointer hover:bg-slate-200" />
               
              </Avatar>

              )}
              <Input
                
                accept=".JPG"
                type="file"
                className="border-none shadow-none hidden"
                onChange={handlePreview}
              />
            </Label>
          </div>
          <div className=" ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6
                "
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea placeholder="" {...field} />
                      </FormControl>
                      <FormDescription>Tell us about you.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  key={user.urls.value}
                  name={"urls"}
                  render={({ field }) => (
                    <FormItem className="my-0">
                      <FormLabel>URL</FormLabel>
                      <FormDescription>
                        Add a link to your website, blog, or social media
                        profiles.
                      </FormDescription>
                      <FormControl className="my-0">
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
