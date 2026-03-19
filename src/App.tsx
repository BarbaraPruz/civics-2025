import { useState } from "react";
import AppHeader from "@/components/appHeader";
import Settings from "@/components/settings";
import Quiz from "./components/quiz";

function App() {
  const [quizInProgress, setQuizInProgress] = useState(false);

  const handleStartQuiz = () => setQuizInProgress(true);
  const handleQuizOver = () => setQuizInProgress(false);

  return (
    <div className="w-[95vw] flex flex-col gap-3 items-center">
      <AppHeader />
      {quizInProgress ? (
        <Quiz onGameOver={handleQuizOver} />
      ) : (
        <div className="flex flex-col gap-2 items-center">
          <Settings />
          <div>
            <button
              onClick={handleStartQuiz}
              className="w-sm bg-(--color-green-accent) text-white text-xl rounded-lg"
            >
              <div className="flex justify-center ">
                <span>Let's Start!</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
