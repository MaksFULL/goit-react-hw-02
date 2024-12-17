import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {

  const [clicks, setClicks] = useState(() => {
    const savedGrades = localStorage.getItem("saved-grades");
    if (savedGrades === null) return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    else { return JSON.parse(savedGrades) };
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = feedbackType => {
    setClicks((oldClicks) => ({
      ...oldClicks,
      [feedbackType]: oldClicks[feedbackType] + 1,
    }));
  }
  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  useEffect(() => {
    localStorage.setItem("saved-grades", JSON.stringify(clicks));
  }, [clicks]);

  return <div className="container">
    <Description name="Sip Happens Café"
      text="Please leave your feedback about our service by selecting one of the options below." />
    <Options update={updateFeedback} reset={resetFeedback} total={totalFeedback} />
    {totalFeedback ? <Feedback clicks={clicks} total={totalFeedback} /> : <Notification />}

  </div>
};

export default App;