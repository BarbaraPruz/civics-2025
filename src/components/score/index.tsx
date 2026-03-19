import useAppStore from "@/store/useAppStore";
import ProgressBar from "../progressBar";
import { Categories } from "@/types/category";

interface ScoreProps {
  questionCount: number;
  onReset: () => void;
}

const Score = ({ questionCount, onReset }: ScoreProps) => {
  // based on category (and only flagged), determine total questions and track progress
  const numberAsked = useAppStore((state) => state.numberAsked);
  const numberCorrect = useAppStore((state) => state.numberCorrect);
  const retryList = useAppStore((state) => state.retryList);
  const category = useAppStore((state) => state.category);
  const quizRetryList = useAppStore((state) => state.quizRetryList);

  const description =
    category === Categories.AllQuestions && !quizRetryList
      ? "all possible questions"
      : category !== Categories.AllQuestions && !quizRetryList
        ? `questions from category ${category}`
        : category === Categories.AllQuestions
          ? "all Retry List questions"
          : `all Retry List questions in category ${category}`;

  return (
    <div className="w-[95vw] md:w-2xl my-4 p-4 bg-(--color-steel-blue) rounded">
      <div className="text-white flex gap-4 items-center">
        <p>Quiz using {description}</p>
      </div>{" "}
      <ProgressBar current={numberAsked} total={questionCount} />
      <div className="mt-2 flex w-full justify-between">
        <p>
          {numberCorrect} of {numberAsked} correct
        </p>

        <p>
          {retryList.size > 0 &&
            `${retryList.size} missed question saved for Retry`}
        </p>
        <button
          onClick={onReset}
          className="px-2 py-1 bg-(--color-red-accent) text-white text-xl rounded-lg"
        >
          <span>Restart</span>
        </button>
      </div>
    </div>
  );
};

export default Score;
