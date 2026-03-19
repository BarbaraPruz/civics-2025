import type { Category } from "./category";

export type Ref = {
  text: string;
  url: string;
};
export type Question = {
  id: number;
  cat: Category;
  q: string;
  a: string;
  ref: Ref;
};
