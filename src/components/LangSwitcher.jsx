import { useLang } from "../context/LangContext";

export function LangSwitcher() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-6 z-50 flex items-center rounded-full border border-white/20 bg-white/5 px-1 py-1 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30"
      aria-label="Switch language"
    >
      <div className="relative flex">
        <span className={`relative z-10 w-10 py-1.5 text-center text-sm font-medium transition-colors duration-300 ${lang === "ru" ? "text-white" : "text-white/50"}`}>RU</span>
        <span className={`relative z-10 w-10 py-1.5 text-center text-sm font-medium transition-colors duration-300 ${lang === "en" ? "text-white" : "text-white/50"}`}>EN</span>
        <span
          className="absolute inset-y-1 z-0 w-10 rounded-full bg-white/20 transition-all duration-300 ease-out"
          style={{ left: lang === "ru" ? 4 : 44 }}
        />
      </div>
    </button>
  );
}
