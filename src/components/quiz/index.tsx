import { useMemo, useState } from "react";
import Score from "@/components/score";
import QuestionCard from "../questionCard";
import useAppStore from "@/store/useAppStore";
import { questions } from "@/constants/questions";
import { Categories, type Category } from "@/types/category";
import { type Question } from "@/types/question";

function assignDeck(category: Category, qs: Question[]) {
  return shuffleQuestions(
    category === Categories.AllQuestions
      ? [...qs]
      : qs.filter((q) => q.category === category),
  );
}

function shuffleQuestions(arr: Question[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRetryQuestions(retryQuestionIds: Set<number>): Question[] {
  return Array.from(retryQuestionIds)
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is Question => q !== undefined);
}

interface QuizProps {
  onGameOver: () => void;
}

const Quiz = ({ onGameOver }: QuizProps) => {
  const reset = useAppStore((state) => state.resetScore);
  const category = useAppStore((state) => state.category);
  const quizRetryList = useAppStore((state) => state.quizRetryList);
  const retryList = useAppStore((state) => state.retryList);
  const markCorrect = useAppStore((state) => state.markCorrect);
  const incrementQuestionsAsked = useAppStore(
    (state) => state.incrementQuestionsAsked,
  );
  const addToRetryList = useAppStore((state) => state.addToRetryList);

  const deck = useMemo(
    () =>
      assignDeck(
        category,
        quizRetryList ? getRetryQuestions(retryList) : questions,
      ),
    [],
  );
  const [deckIndex, setDeckIndex] = useState(0);

  const handleReset = () => {
    reset();
    onGameOver();
  };

  const handleNext = (result: boolean) => {
    incrementQuestionsAsked();
    if (result) {
      markCorrect();
    } else {
      addToRetryList(deck[deckIndex].id);
    }
    setDeckIndex((i) => i + 1);
  };

  if (deck.length === 0) {
    return (
      <div className="my-4 w-[95vw] md:w-2xl m-auto text-center">
        <p className="text-white mb-2">No Questions To Ask! Check Settings.</p>
        <button
          onClick={onGameOver}
          className="px-2 py-1 w-xw bg-(--color-red-accent) text-white text-xl rounded-lg"
        >
          <span>Back to Start</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-[95vw] md:w-2xl m-auto">
      <Score onReset={handleReset} questionCount={deck.length} />

      <div className="w-[95vw] md:w-2xl p-4 rounded mt-1 bg-white m-auto">
        {deckIndex >= deck.length ? (
          <div className="p-8 text-center">
            <p className="text-2xl mb-2">Quiz Complete!</p>
            <button
              onClick={handleReset}
              className="px-2 py-1 w-xs bg-(--color-red-accent) text-white text-xl rounded-lg"
            >
              <span>Back to Start</span>
            </button>
          </div>
        ) : (
          <QuestionCard question={deck[deckIndex]} onResult={handleNext} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
