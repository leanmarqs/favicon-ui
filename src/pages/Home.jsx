// src/components/BuscarFavoritos.jsx
import { useState } from "react";

export default function Home() {
  const [termo, setTermo] = useState("");

  const handleBuscar = () => {
    console.log("Buscando por:", termo);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-white mb-6 text-center tracking-wide">
          Buscar favoritos
        </h1>

        <div className="flex w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-neutral-800 focus-within:border-neutral-600 transition-colors">
          {/* Ícone de lupa */}
          <div className="pl-4 flex items-center text-neutral-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Buscar favoritos"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            className="flex-1 bg-transparent text-neutral-200 placeholder-neutral-500 focus:outline-none px-3 py-3"
          />

          <button
            onClick={handleBuscar}
            className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-r-2xl font-medium transition-colors border-l border-neutral-800"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
