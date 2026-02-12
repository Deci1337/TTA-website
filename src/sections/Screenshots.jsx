import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

export function Screenshots() {
  const { t } = useLang();
  const screenshots = [
    { id: 1, src: '/screenshots/screen-1.jpg' },
    { id: 2, src: '/screenshots/screen-2.jpg' },
    { id: 3, src: '/screenshots/screen-3.jpg' },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.screenshot-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-white">{t("screenshots.title")}</h2>
        <p className="mt-2 text-white/60">{t("screenshots.subtitle")}</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-center justify-center">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className={`screenshot-card relative w-80 md:w-96 rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:border-white/20 opacity-0 shadow-2xl ${
              index === 0 ? 'md:-rotate-6' : index === 2 ? 'md:rotate-6' : ''
            }`}
            style={{
              transitionDelay: `${index * 200}ms`,
              width: '400px',
            }}
          >
            <img
              src={screenshot.src}
              alt={`TikTok Agent Screenshot ${screenshot.id}`}
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentElement.querySelector('.placeholder') || document.createElement('div');
                placeholder.className = 'placeholder absolute inset-0 flex items-center justify-center';
                placeholder.innerHTML = `
                  <div class="text-center px-4">
                    <svg class="w-16 h-16 mx-auto mb-2 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p class="text-white/40 text-sm">Screenshot ${screenshot.id}</p>
                    <p class="text-white/30 text-xs mt-1">Add image: ${screenshot.src}</p>
                  </div>
                `;
                e.target.parentElement.appendChild(placeholder);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
