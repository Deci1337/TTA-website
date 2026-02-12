import { useLang } from "../context/LangContext";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
        <span className="mr-2 flex h-2 w-2">
          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        {t("hero.badge")}
      </div>

      <h1
        className="gradient-text text-7xl font-bold tracking-tight sm:text-9xl mb-10"
      >
        TikTok Agent
      </h1>

      <p className="mb-12 max-w-2xl text-xl font-medium text-white/70 leading-relaxed">
        {t("hero.desc")}
      </p>

      <a
        href="#download"
        className="group inline-flex items-center justify-center rounded-full bg-white px-12 py-4 text-base font-medium text-black transition-transform hover:scale-105 active:scale-95"
      >
        {t("hero.download")}
        <svg className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:rotate-[360deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
