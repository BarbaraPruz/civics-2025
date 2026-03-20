import { useEffect, useState } from "react";
import type { Question } from "@/types/question";

interface QuestionCardProps {
  question: Question;
  onResult: (correctAnswer: boolean) => void;
}

const QuestionCard = ({ question, onResult }: QuestionCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  const handleShowAnswer = () => setShowAnswer(true);

  const handleCorrect = () => onResult(true);
  const handleIncorrect = () => onResult(false);

  return (
    <div>
      <div>
        <p className="subtitle">Question</p>
        <p className="text-center text-2xl">{question.question}</p>
      </div>
      <div className="mt-4 text-center">
        {showAnswer ? (
          <div className="text-left">
            <p className="subtitle text-left">Answer</p>
            <p
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            />
            <p className="mt-1 mb-2">
              Learn more:{" "}
              <a
                className="underline text-blue-500 text-base"
                target="_blank"
                href={question.reference.href}
              >
                {question.reference.label}
              </a>
            </p>
            <div className="flex mt-2 gap-3">
              <button
                onClick={handleCorrect}
                className="w-sm bg-(--color-red-accent) text-white text-xl rounded-lg"
              >
                I know that!
              </button>
              <button
                onClick={handleIncorrect}
                className="w-sm bg-(--color-red-accent) text-white text-xl rounded-lg"
              >
                I didn't know that
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleShowAnswer}
            className="w-xs py-1 bg-(--color-red-accent) text-white text-xl rounded-lg"
          >
            Show Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
