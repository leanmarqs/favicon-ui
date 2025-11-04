import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FaviconCard from "./components/FaviconCard";

export default function App() {
  const [favicons, setFavicons] = useState([]);

  const handleAddFavicon = (faviconData) => {
    setFavicons((prev) => [...prev, faviconData]);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Favicon Fetcher 🍎
      </h1>
      <SearchBar onAddFavicon={handleAddFavicon} />

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {favicons.map((f, i) => (
          <FaviconCard key={i} favicon={f} />
        ))}
      </div>
    </div>
  );
}
