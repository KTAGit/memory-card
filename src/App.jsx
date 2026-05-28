import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./navbar.jsx";
import { Score } from "./Score.jsx";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [data, setData] = useState([]);
  const [cardKey, setCardKey] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [streak, setStreak] = useState(0);

  function shuffle(key) {
    const shuffled = [...data];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setData(shuffled);
  }

  function hundleCardClick(key) {
    if (cardKey.includes(key)) {
      setBestScore((prev) => Math.max(prev, score));
      setScore(0);
      setCardKey([]);
      setStreak(0);
    } else {
      setCardKey((prev) => [...prev, key]);
      setScore((prev) => prev + 100);
      setStreak((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/collections/3Q5BKLEgNPs/photos?client_id=${accessKey}&per_page=30`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
              "Accept-Version": "v1",
            },
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImg();
  }, []);
  return (
    <>
      <Navbar streak={streak} />
      <Score score={score} bestScore={bestScore} />
      <div className="image-wrapper">
        {data.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.regular}
            onClick={() => {
              shuffle(photo.id);
              hundleCardClick(photo.id);
            }}
          />
        ))}
      </div>
      <div className="restart-btn-wrapper">
        <button className="restart-btn">RESTART GAME</button>
      </div>
    </>
  );
}
