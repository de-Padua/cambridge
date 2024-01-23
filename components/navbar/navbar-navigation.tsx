"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

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

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Share new histories
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Write histories and fanfics
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Write your first history easily 👌
              </ListItem>
              <ListItem href="/docs/installation" title="v.1">
                This is the lauch of the Cambridge app 🎉
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="What's next">
                New features incoming 🤳
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2  ">
              {bookCategories.map((bookCategorie) => (
               
                  <Link href={bookCategorie.href}> <ListItem key={bookCategorie.title}>{bookCategorie.title} </ListItem></Link>
               
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug  text-sm">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
