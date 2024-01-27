export interface UserBookProps {
  title: string;
  author: string;
  category: category;
  views: number;
  preface: string;

  favorites: { id: string; userName: string }[];

  tags: {
    title: string;
    id: string;
  }[];
  chapters: chapter[];
  synopisis: string;
  typeOfBook: "unique" | "series";
  createdAt: Date;
  finished:boolean
}

type chapter = {
  title: string;
  text: string;
};

type category = {
  title: string;
  id: string;
};

export type tag = {
  title: string;
  id: string;
};


export type User = {
  name:string,
  email:string,
  books:UserBookProps[] | [],
  favorites:UserBookProps[] | [],
  bio:string,
  joined:Date,
  urls:{value:string}

} 