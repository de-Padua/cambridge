export interface CardProps {
    title: string;
    subtitle?: string;
    categories: categories[];
    views: number;
  }
  type categories = {
    title: string;
    id: string;
  };