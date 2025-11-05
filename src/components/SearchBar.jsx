import { useState } from "react";
import axios from "axios";

export default function SearchBar({ onAddFavicon }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const response = await axios.post("/api/favicons/download", { url });
      const data = response.data;
      if (!data || !data.editedPath) return alert("Erro ao gerar favicon.");

      const fileName = data.editedPath.split(/[/\\]/).pop();
      const imgUrl = `/favicons/edited/${fileName}`;
      onAddFavicon({ name: new URL(url).hostname, imgUrl });
      setUrl("");
    } catch (err) {
      console.error("❌ Erro ao baixar favicon:", err);
      alert("Erro ao baixar o favicon. Verifique o backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-12">
      <div className="flex items-center bg-[#16181c] border border-gray-800 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <input
          type="text"
          placeholder="🔍 Digite a URL (ex: https://openai.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-transparent text-gray-100 px-5 py-3 placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`px-6 py-3 font-medium rounded-r-full transition-all duration-200 ${
            loading
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white active:scale-95"
          }`}
        >
          {loading ? "Baixando..." : "Pegar"}
        </button>
      </div>
    </div>
  );
}
