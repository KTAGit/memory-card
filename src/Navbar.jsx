export function Navbar(streak) {
  return (
    <div className="navbar">
      <div className="title-wrapper">
        <h1 className="title">MEMORY GAME</h1>
      </div>
      <div className="streak-wrapper">
        <p className="streak-display">STREAK: {streak.streak}</p>
      </div>
    </div>
  );
}
