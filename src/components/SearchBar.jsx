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

      if (!data || !data.editedPath) {
        console.error("⚠️ Backend retornou resposta inesperada:", data);
        alert(
          "Não foi possível gerar o favicon. Verifique o console do servidor."
        );
        return;
      }

      // extrai o nome do arquivo corretamente
      const fileName = data.editedPath.split("/").pop();
      const imgUrl = `/favicons/edited/${fileName}`;

      onAddFavicon({ name: new URL(url).hostname, imgUrl });
      setUrl("");
    } catch (err) {
      console.error("❌ Erro ao baixar favicon:", err);
      alert(
        "Erro ao baixar o favicon. Verifique se o servidor está rodando em http://localhost:3000"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full gap-3">
      <input
        type="text"
        placeholder="Digite a URL (ex: https://openai.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 rounded-2xl border border-gray-300 px-4 py-3 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
      />
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`rounded-2xl px-6 py-3 text-white font-medium shadow-md transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 active:scale-95"
        }`}
      >
        {loading ? "Baixando..." : "Pegar Favicon"}
      </button>
    </div>
  );
}
