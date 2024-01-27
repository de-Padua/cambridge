"use client";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserBookProps } from "@/types";
const formSchema = z.object({
  Title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  category: z.string(),
  type: z.enum(["unique", "series"], {
    required_error: "You need to select a type.",
  }),
  synopisis: z
    .string()
    .min(10, {
      message: "Synopisis must be at least 10 characters.",
    })
    .max(460, {
      message: "Bio must not be longer than 460 characters.",
    }),
});

export function BookForm({defaultData} : {defaultData: UserBookProps | null}) {
  const [tags, setTag] = useState<string[]>([]);
 

  const tagRef = useRef(null);
  const bookCategories: { title: string; href: string }[] = [
    { title: "Fiction", href: "/category/fiction" },
    { title: "Mystery & Thriller", href: "/category/mystery-thriller" },
    { title: "Science Fiction & Fantasy", href: "/category/sci-fi-fantasy" },
    { title: "Romance", href: "/category/romance" },
    { title: "Non-Fiction", href: "/category/non-fiction" },
    { title: "Biography & Memoir", href: "/category/biography-memoir" },
    { title: "History", href: "/category/history" },
    { title: "Self-Help", href: "/category/self-help" },
    { title: "Science & Nature", href: "/category/science-nature" },
    { title: "Cooking & Culinary Arts", href: "/category/cooking" },
  ];

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title:defaultData?.title,
      category: defaultData?.category.title,
      synopisis:defaultData?.synopisis,
      type:defaultData?.typeOfBook

    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleAddNewTag = () => {
    //set tags to the array state

    if (tagRef.current!.value === "") return;

    setTag((oldValue) => [...oldValue, tagRef.current!.value]);

    //clean the input
    tagRef.current.value = "";
  };

  return (
    <div className=" ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="Title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-fit">
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={bookCategories[0].title}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category for you history" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {bookCategories.map((item) => {
                      return (
                        <SelectItem value={item.title}>{item.title}</SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Type of series</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="series" />
                      </FormControl>
                      <FormLabel className="font-normal">Series</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="unique" />
                      </FormControl>
                      <FormLabel className="font-normal">Unique</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="my-1 ">
            <FormLabel>Tags</FormLabel>
            <div className="flex items-center justify-start  ">
              <div className="flex items-center justify-start flex-wrap ">
                {defaultData?.tags?.map((i) => {
                  return (
                    <Badge className="text-xs  cursor-pointer mr-1">{i.title}</Badge>
                  );
                })}
                <Dialog>
                  <DialogTrigger className="m-0 p-0">
                    <Badge
                      className="text-xs p-1 cursor-pointer "
                      variant={"secondary"}
                    >
                      <PlusIcon className="mr-1" /> Add tag
                    </Badge>
                  </DialogTrigger>
                  <DialogContent className="w-1/3">
                    <DialogHeader>
                      <DialogTitle>Add tags for your book</DialogTitle>
                      <DialogDescription>
                        <div>
                          <h2 className="py-2 ">Current tags</h2>
                          <div className=" flex items-center justify-start flex-wrap ">
                            {tags?.map((i) => {
                              return (
                                <Badge className="text-xs p-1 cursor-pointer mr-1 ">
                                  {i}
                                  <Cross1Icon className="h-3 w-3 ml-1 " />
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                        <div className="w-full my-2 space-y-2 ">
                          <Input type="text" ref={tagRef} />
                          <Button
                            size={"sm"}
                            variant={"outline"}
                            onClick={() => {
                              handleAddNewTag();
                            }}
                          >
                            Add new tag
                          </Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <FormField
            control={form.control}
            name="synopisis"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synopisis</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your history"
                    className="resize-none min-h-40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          <Button type="submit" variant={'outline'}>Submit  </Button>
        </form>
      </Form>
    </div>
  );
}
