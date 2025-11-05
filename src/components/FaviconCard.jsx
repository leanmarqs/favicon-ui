export default function FaviconCard({ favicon }) {
  if (!favicon?.imgUrl) return null;

  const extractName = (hostname) => {
    if (!hostname) return "";
    const clean = hostname.replace(/^www\./, "").split(".")[0];
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  };

  const siteName = extractName(favicon.name);

  const handleClick = () => {
    const targetUrl = `https://${favicon.name}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        className="focus:outline-none hover:scale-110 active:scale-95 transition-transform"
      >
        <img
          src={favicon.imgUrl}
          alt={siteName}
          className="w-16 h-16 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] rounded-2xl"
        />
      </button>
      <p className="text-sm text-gray-300 font-semibold">{siteName}</p>
    </div>
  );
}
