export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 flex flex-col items-center font-sans">
      <header className="w-full flex justify-center py-10 border-b border-gray-800 mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Buscar Favoritos:
        </h1>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center px-6">
        {children}
      </main>

      <footer className="mt-12 py-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Favicon Fetcher — inspired by Twitter
        </p>
      </footer>
    </div>
  );
}
