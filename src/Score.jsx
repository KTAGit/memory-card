import { useEffect } from "react";

export function Score(score) {
  useEffect(() => {
    localStorage.setItem("bestScore", score.bestScore);
  }, [score.bestScore]);
  return (
    <div className="score-wrapper">
      <div
        className={
          score.score === 1600
            ? "current-score-wrapper won"
            : "current-score-wrapper"
        }
      >
        <p className="current-score-label">CURRENT SCORE</p>
        <p className="current-score-display">{score.score}</p>
      </div>
      <div className="all-time-score-wrapper">
        <p className="all-timebest-label">ALL-TIME BEST</p>
        <p className="all-timebest-score-display">{score.bestScore}</p>
      </div>
    </div>
  );
}
