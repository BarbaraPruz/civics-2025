export const Categories = {
  AllQuestions: "All Questions",
  Principles: "Principles",
  Government: "Government",
  Rights: "Rights",
  ColonialEra: "Colonial Era",
  ["1800s"]: "1800s",
  RecentHistory: "Recent History",
  Geography: "Geography",
  Symbols: "Symbols",
  ["2025 New"]: "2025 New",
} as const;

export type Category = (typeof Categories)[keyof typeof Categories];
