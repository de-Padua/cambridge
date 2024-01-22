import React from "react";
import { CarouselMain } from "@/components/home/carousel-main";
import { HeartIcon, StarIcon, UpdateIcon } from "@radix-ui/react-icons";
import { CardProps } from "@/types";
import Section from "@/components/home/section";
function page() {
  const popular: CardProps[] = [
    {
      title: "The Art of Programming",
      subtitle: "Mastering the Coding Craft",
      categories: [
        { title: "Programming", id: "prog_1" },
        { title: "Technology", id: "tech_1" },
      ],
      views: 1200,
    },
    {
      title: "Mystery in the Shadows",
      subtitle: "Unraveling the Enigma",
      categories: [
        { title: "Mystery", id: "myst_1" },
        { title: "Thriller", id: "thrill_1" },
      ],
      views: 800,
    },
    {
      title: "Beyond the Stars",
      subtitle: "A Space Odyssey",
      categories: [
        { title: "Science Fiction", id: "sci_fi_1" },
        { title: "Adventure", id: "adv_1" },
      ],
      views: 1500,
    },
    {
      title: "Love in Bloom",
      subtitle: "A Romantic Tale",
      categories: [
        { title: "Romance", id: "rom_1" },
        { title: "Relationships", id: "rel_1" },
      ],
      views: 1000,
    },
    {
      title: "World History Chronicles",
      subtitle: "Journey Through Time",
      categories: [
        { title: "History", id: "hist_1" },
        { title: "Education", id: "edu_1" },
      ],
      views: 900,
    },
    {
      title: "Einstein's Mind",
      subtitle: "The Genius Behind the Theories",
      categories: [
        { title: "Biography", id: "bio_1" },
        { title: "Science", id: "sci_2" },
      ],
      views: 1100,
    },
    {
      title: "Empower Your Mind",
      subtitle: "A Journey to Self-Discovery",
      categories: [
        { title: "Self-Help", id: "sh_1" },
        { title: "Personal Development", id: "pd_1" },
      ],
      views: 950,
    },
    {
      title: "Nature's Wonders",
      subtitle: "Exploring Earth's Beauty",
      categories: [
        { title: "Science & Nature", id: "sci_nat_1" },
        { title: "Environment", id: "env_1" },
      ],
      views: 1300,
    },
    {
      title: "The Culinary Journey",
      subtitle: "From Kitchen Delights to Gastronomic Feasts",
      categories: [
        { title: "Cooking", id: "cook_1" },
        { title: "Culinary Arts", id: "cul_art_1" },
      ],
      views: 1050,
    },
    {
      title: "Inspirational Stories",
      subtitle: "Life Lessons from Real Experiences",
      categories: [
        { title: "Non-Fiction", id: "nf_1" },
        { title: "Inspirational", id: "insp_1" },
      ],
      views: 1200,
    },
  ];
  return (
    <div className="flex items-start justify-center w-full p-20 flex-col space-y-5 ">
      <Section array={popular} section_title={"Popular histories"} />
    </div>
  );
}

export default page;
