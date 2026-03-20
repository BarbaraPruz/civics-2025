export const Categories = {
  AllQuestions: "All Questions",
  Principles: "Principles of American Government",
  Government: "System of Government",
  Rights: "Rights and Responsibilities",
  ColonialEra: "Colonial Period and Independence",
  ["1800s"]: "1800s",
  RecentHistory: "Recent American History",
  Symbols: "Symbols",
  Holidays: "Holidays",
} as const;

export type Category = (typeof Categories)[keyof typeof Categories];
