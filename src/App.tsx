import { useState } from "react";
import AppHeader from "@/components/appHeader";
import Settings from "@/components/settings";
import Quiz from "./components/quiz";
import Footer from "./components/footer";

function App() {
  const [quizInProgress, setQuizInProgress] = useState(false);

  const handleStartQuiz = () => setQuizInProgress(true);
  const handleQuizOver = () => setQuizInProgress(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
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
                  className="w-sm bg-(--color-green-accent) text-white text-xl"
                >
                  <div className="flex justify-center ">
                    <span>Let's Start!</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
