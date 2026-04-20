import { useEffect, useState } from "react";

import useAppStore from "@/store/useAppStore";
import { AudioIcon, TextIcon } from "@/icons";
import type { Question } from "@/types/question";
import { AudioSettings } from "@/types/settings";

const speech = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.75;
  window.speechSynthesis.speak(utterance);
};

const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

interface QuestionCardProps {
  question: Question;
  onResult: (correctAnswer: boolean) => void;
}

const QuestionCard = ({ question, onResult }: QuestionCardProps) => {
  const audioSetting = useAppStore((state) => state.audioSetting);

  const [showAnswer, setShowAnswer] = useState(false);
  const [displayQuestionText, setDisplayQuestionText] = useState(
    audioSetting === AudioSettings.Manual,
  );

  useEffect(() => {
    setShowAnswer(false);
    if (audioSetting === AudioSettings.Auto) {
      // To avoid the "double audio" at start of quiz in Auto Audio mode,
      // disable strict mode in main.tsx
      speech(question.question);
    }
  }, [question, audioSetting]);

  const handleShowAnswer = () => setShowAnswer(true);

  const handleCorrect = () => {
    setDisplayQuestionText(audioSetting === AudioSettings.Manual);
    onResult(true);
  };

  const handleIncorrect = () => {
    setDisplayQuestionText(audioSetting === AudioSettings.Manual);
    onResult(false);
  };

  const handleTextQuestion = () => setDisplayQuestionText(true);

  const handleAudioQuestion = () => {
    speech(question.question);
  };

  const handleAudioAnswer = () => {
    speech(stripHtml(question.answer));
  };

  return (
    <div>
      <div>
        <div className="flex justify-between w-full">
          <p className="subtitle">Question</p>
          {audioSetting === AudioSettings.Manual ? (
            <button onClick={handleAudioQuestion}>
              <AudioIcon />
            </button>
          ) : (
            <button onClick={handleTextQuestion}>
              <TextIcon />
            </button>
          )}
        </div>
        {displayQuestionText && (
          <p className="text-center text-2xl">{question.question}</p>
        )}
      </div>
      <div className="mt-4 text-center">
        {showAnswer ? (
          <div className="text-left">
            <div className="flex justify-between w-full">
              <p className="subtitle text-left">Answer</p>
              <button onClick={handleAudioAnswer}>
                <AudioIcon />
              </button>
            </div>
            <p
              className="text-xl"
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
            <div className="flex mt-6 gap-3">
              <button
                onClick={handleCorrect}
                className="w-sm bg-(--color-red-accent) text-white text-xl"
              >
                I know that!
              </button>
              <button
                onClick={handleIncorrect}
                className="w-sm bg-(--color-red-accent) text-white text-xl"
              >
                I didn't know that
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleShowAnswer}
            className="w-xs py-1 bg-(--color-red-accent) text-white text-xl"
          >
            Show Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
