import { useEffect, useState } from "react";
import "./App.css";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [data, setData] = useState([]);

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
    <div className="image-wrapper">
      {data.map((photo, index) => (
        <img key={index} src={photo.urls.regular} />
      ))}
    </div>
  );
}
