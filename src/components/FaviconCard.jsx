export default function FaviconCard({ favicon }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center overflow-hidden border border-gray-200 hover:scale-105 transition-transform">
        <img
          src={favicon.imgUrl}
          alt={favicon.name}
          className="w-12 h-12 object-contain"
        />
      </button>
      <p className="text-sm text-gray-700 font-medium">{favicon.name}</p>
    </div>
  );
}
