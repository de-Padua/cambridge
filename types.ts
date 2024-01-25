export interface UserBookProps {
  title: string;
  author: string;
  category: category;
  views: number;
  preface: string;
  favorites: { id: string; userName: string }[];

  tags : {
    title:string,
    id:string,
}[],
chapters:chapter[],
sinopisis:string,
typeOfBook : 'unique' | 'series',
createdAt:Date
}


type chapter ={

  title:string,
  text:string,
}



type category = {
  title: string;
  id: string;
};


export type tag = {
    title:string,
    id:string,
}
