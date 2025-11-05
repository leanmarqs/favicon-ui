import { useState } from "react";
import RootLayout from "./layouts/RootLayout";
import SearchBar from "./components/SearchBar";
import FaviconCard from "./components/FaviconCard";
import Home from "./pages/Home";

export default function App() {
  // const [favicons, setFavicons] = useState([]);

  // const handleAddFavicon = (favicon) => {
  //   setFavicons((prev) => [...prev, favicon]);
  // };

  return (
    <>
      {/*<RootLayout>
      <SearchBar onAddFavicon={handleAddFavicon} />

      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {favicons.map((f, idx) => (
          <FaviconCard key={idx} favicon={f} />
        ))}
      </div>
    </RootLayout> */}
      <Home />;
    </>
  );
}
