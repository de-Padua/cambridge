import React from "react";
import { User } from "@/types";
import ProfileHeader from "@/components/profile/profile-header";
import HistoriesRoll from "@/components/profile/histories-roll";
import Section from "@/components/home/section";

const user: User = {
  username: "mysterious32",
  id:'223m213',
  
  email: "john@example.com",
  books: [
    {
        bookCoverUrl:"https://m.media-amazon.com/images/I/41O8eTrrAML._AC_UL320_.jpg",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: {title:"Fiction",id:"1"},
        views: 1000,
        preface: "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since...",
        favorites: [
          { id: "123", userName: "booklover1" },
          { id: "456", userName: "reader99" }
        ],
        tags: [
          { title: "Classics", id: "1" },
          { title: "Romance", id: "2" }
        ],
        chapters: [
          { title: "Chapter 1", text: "In my younger and more vulnerable years..." },
          { title: "Chapter 2", text: "About half way between West Egg and New York..." }
        ],
        synopisis: "The story primarily concerns the young and mysterious millionaire Jay Gatsby...",
        typeOfBook: "unique",
        createdAt: new Date("1925-04-10"),
        finished: true
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: {title:"Fiction",id:"1"},
        views: 1500,
        preface: "In a hole in the ground there lived a hobbit...",
        favorites: [
          { id: "789", userName: "shirefolk" },
          { id: "101112", userName: "ringbearer" }
        ],
        tags: [
          { title: "Adventure", id: "3" },
          { title: "Middle Earth", id: "4" }
        ],
        chapters: [
          { title: "Chapter 1", text: "An Unexpected Party" },
          { title: "Chapter 2", text: "Roast Mutton" }
        ],
        synopisis: "The Hobbit follows the quest of home-loving hobbit Bilbo Baggins...",
        typeOfBook: "unique",
        createdAt: new Date("1937-09-21"),
        finished: true,
        bookCoverUrl:"https://m.media-amazon.com/images/I/81JK51UWPpL._SY466_.jpg"
      },
      {
        bookCoverUrl:"https://m.media-amazon.com/images/I/81xVmngZ2mL._AC_UL320_.jpg",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: {title:"Fiction",id:"1"},
        views: 1200,
        preface: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow...",
        favorites: [
          { id: "131415", userName: "scout" },
          { id: "161718", userName: "atticus" }
        ],
        tags: [
          { title: "Southern Gothic", id: "5" },
          { title: "Legal Drama", id: "6" }
        ],
        chapters: [
          { title: "Chapter 1", text: "Maycomb was a tired, old town..." },
          { title: "Chapter 2", text: "It was times like these when I thought my father..." }
        ],
        synopisis: "To Kill a Mockingbird is a novel by Harper Lee published in 1960...",
        typeOfBook: "unique",
        createdAt: new Date("1960-07-11"),
        finished: true
      },
      {
        bookCoverUrl:"https://m.media-amazon.com/images/I/71duwitbLBL._AC_UL320_.jpg",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        category: {title:"Fiction",id:"1"},
        views: 2000,
        preface: "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much...",
        favorites: [
          { id: "192021", userName: "potterhead" },
          { id: "222324", userName: "hermione_granger" }
        ],
        tags: [
          { title: "Magic", id: "7" },
          { title: "Wizards", id: "8" }
        ],
        chapters: [
          { title: "Chapter 1", text: "The Boy Who Lived" },
          { title: "Chapter 2", text: "The Vanishing Glass" }
        ],
        synopisis: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling...",
        typeOfBook: "series",
        createdAt: new Date("1997-06-26"),
        finished: true
      },
      {
        bookCoverUrl:"https://m.media-amazon.com/images/I/71rsf7ZXdZL._AC_UL320_.jpg",
        title: "1984",
        author: "George Orwell",
        category: {title:"Fiction",id:"1"},
        views: 900,
        preface: "It was a bright cold day in April, and the clocks were striking thirteen...",
        favorites: [
          { id: "252627", userName: "bigbrother" },
          { id: "282930", userName: "rebel" }
        ],
        tags: [
          { title: "Totalitarianism", id: "9" },
          { title: "Surveillance", id: "10" }
        ],
        chapters: [
          { title: "Chapter 1", text: "It was a bright cold day in April, and the clocks were striking thirteen..." },
          { title: "Chapter 2", text: "Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind..." }
        ],
        synopisis: "1984 is a dystopian novel by George Orwell published in 1949...",
        typeOfBook: "unique",
        createdAt: new Date("1949-06-08"),
        finished: true
      }
  ],
  favorites: [],
  bio: "I am a passionate writer who loves to exI am a passionate writer who loves to explore various genres.I am a passionate writer who loves to exI am a passionate writer who loves to explore various genres.I am a passionate writer who loves to exI am a passionate writer who loves to explore various genres.I am a passionate writer who loves to exI am a passionate writer who loves to explore various genres.I am a passionate writer who loves to exI am a passionate writer who loves to explore various genres.",
  joined: new Date(),
  urls: { value: "https://shadcn.com" },
  photoUrl: "https://avatars.githubusercontent.com/u/106854024?v=4",
  
};

function page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen flex-col my-20">
      <ProfileHeader
        headerInfo={{
            username: user.username,
          photoUrl: user.photoUrl,
          joined: user.joined,
          bio: user.bio,
          url:user.urls.value
        }}
      />
      <div className="w-1/2 space-y-5 my-20 ">
      <div>
      <h2 className="text-2xl font-bold">Histories</h2>
      <p className="text-sm text-muted-foreground">Published histories</p>
      </div>
      <HistoriesRoll books={user.books}/>
      
      </div>
    </div>
  );
}

export default page;
