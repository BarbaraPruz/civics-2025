import type { Category } from "./category";

export type Ref = {
  label: string;
  href: string;
};
export type Question = {
  id: number;
  category: Category;
  question: string;
  answer: string;
  reference: Ref;
};
