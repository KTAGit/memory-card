export function Score() {
  return (
    <div className="score-wrapper">
      <div className="current-score-wrapper">
        <p className="current-score-label">CURRENT SCORE</p>
        <p className="current-score-display">0</p>
      </div>
      <div className="all-time-score-wrapper">
        <p className="all-timebest-label">ALL-TIME BEST</p>
        <p className="all-timebest-score-display">0</p>
      </div>
    </div>
  );
}
