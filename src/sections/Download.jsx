import { useLang } from "../context/LangContext";

export function Download() {
  const { t } = useLang();
  return (
    <section id="download" className="relative py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{t("download.title")}</h2>
        <p className="text-xl text-white/60 mb-12">
          {t("download.subtitle")}
        </p>
        
        <div className="flex justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-12 py-5 text-lg font-medium text-black transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
            </svg>
            {t("download.btn")}
          </a>
        </div>

        <div className="mt-8 text-sm text-white/40">
          {t("download.note")}
        </div>
      </div>
    </section>
  );
}
