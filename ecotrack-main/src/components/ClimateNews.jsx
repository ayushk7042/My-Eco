import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

const ClimateNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      const parser = new Parser();
      const CORS_PROXY = "https://api.allorigins.win/get?url=";
      const feedURL = encodeURIComponent("https://climate.nasa.gov/news/rss.xml");

      try {
        const res = await fetch(`${CORS_PROXY}${feedURL}`);
        const data = await res.json();
        const parsed = await parser.parseString(data.contents);
        setNews(parsed.items.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch climate RSS feed", err);
      }
    };
    fetchRSS();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-green-700 mb-4">🌍 Latest Climate News</h2>
      <ul className="list-disc ml-6 space-y-2">
        {news.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClimateNews;
