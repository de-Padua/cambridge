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
import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

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

export function BookForm() {
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
      Title: "",
      category: "Choose one category",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
           <FormField
          control={form.control}
          name="synopisis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
